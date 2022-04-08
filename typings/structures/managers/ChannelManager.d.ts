import { Channels } from '../Channel.js';
import { Client } from '../../client/Client.js';
import { Snowflake } from '../../client/ClientOptions.js';
import { BaseManager } from './BaseManager.js';
import { DMChannel } from '../DMChannel.js';
export declare class ChannelManager<T extends {
    id: Snowflake;
    _deserialise(data: any): T;
} = Channels> extends BaseManager<T> {
    constructor(client: Client, __class?: any);
    resolve(data: any): T | undefined;
    fetch(id: Snowflake, cache?: boolean): Promise<T>;
    createDM(user: Snowflake, cache?: boolean): Promise<DMChannel>;
    dmChannel(id: Snowflake): DMChannel | null;
}
