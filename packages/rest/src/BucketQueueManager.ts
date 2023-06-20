import { AsyncQueue } from '@sapphire/async-queue';
import { setTimeout as sleep } from 'node:timers/promises';
import Dispatcher from 'undici/types/dispatcher';
import { APIRequest } from './APIRequest';
import { RateLimitedError } from './RESTError.js';
import { RequestManager } from './RequestManager';

export class BucketQueueManager {
  #queue = new AsyncQueue();
  /** The total amount of requests that can be made on this bucket before getting rate limited. */
  public limit = Infinity;
  /** The remaining requests we can make until we are rate limited. */
  public remaining = 1;
  /** The UNIX timestamp at which this bucket's rate limit will expire. */
  public reset = -1;

  constructor(
    private readonly manager: RequestManager,
    public readonly id: string,
    public readonly majorId: string,
  ) {}

  private applyRateLimitInfo(res: Dispatcher.ResponseData) {
    if (!res.headers['x-ratelimit-bucket']) return;

    this.limit = +res.headers['x-ratelimit-limit']!;
    this.remaining = +res.headers['x-ratelimit-remaining']!;
    this.reset = +res.headers['x-ratelimit-reset']! * 1000;
  }
  public get durUntilReset() {
    return this.reset + this.manager.offset - Date.now();
  }
  public handleRateLimit(req: APIRequest, res: Dispatcher.ResponseData) {
    this.applyRateLimitInfo(res);

    if (req.retries! < req.allowedRetries!) {
      req.retries!++;

      return this.queue(req);
    } else {
      throw new RateLimitedError(req, res, this.id);
    }
  }
  public get limited() {
    return this.manager.limited || this.localLimited;
  }
  public get localLimited() {
    return this.remaining === 0 && Date.now() < this.reset;
  }

  public isLimited(global = true) {
    if (this.localLimited) {
      return { global: false };
    } else if (global && this.manager.limited) {
      return { global: true };
    } else {
      return false;
    }
  }

  public async queue(req: APIRequest): Promise<Dispatcher.ResponseData> {
    // let running requests finish
    await this.#queue.wait();

    let limited: { global: boolean } | false = false;

    while ((limited = this.isLimited(req.useGlobalRateLimit))) {
      if (!limited.global) {
        const dur = this.durUntilReset;
        this.debug(`Rate limited, sleeping for ${dur}ms`);
        await sleep(dur);
      } else {
        const dur = this.manager.durUntilReset;
        this.debug(`Globally rate limited, sleeping for ${dur}ms`);
        await sleep(dur);
      }
    }

    try {
      const res = await this.manager.makeRequest(
        this,
        req as Required<APIRequest>,
      );

      this.applyRateLimitInfo(res);

      return res;
    } finally {
      this.#queue.shift();
    }
  }

  #__log_header() {
    return `[${this.id}]`;
  }

  private debug(...data: any[]) {
    this.manager.debug(this.#__log_header(), ...data);
  }
}
