import { APIGuild, APIGuildChannel, APIUnavailableGuild, GuildChannelType, GuildDefaultMessageNotifications, GuildExplicitContentFilter, GuildFeature, GuildMFALevel, GuildNSFWLevel, GuildPremiumTier, GuildVerificationLevel, Snowflake } from 'discord-api-types/v10';
import { GuildSystemChannelFlags } from '../util/bitfields/GuildSystemChannelFlags';
import { FileResolvable } from '../util/resolvables/FileResolvable.js';
import { GuildChannel } from './GuildChannel';
import { GuildChannelManager } from './managers/GuildChannelManager';
import { GuildMemberManager } from './managers/GuildMemberManager';
import { BaseStructure } from './templates/BaseStructure';
import { Client } from '../client/Client';
export declare class Guild extends BaseStructure<APIGuild | APIUnavailableGuild> {
    available: boolean;
    name: string | null;
    description: string | null;
    ownerId: Snowflake;
    get owner(): import("./User").User | import("./ExtendedUser").ExtendedUser | undefined;
    applicationId: Snowflake | null;
    preferredLocale: string;
    features: GuildFeature[];
    mfaLevel: GuildMFALevel;
    nsfwLevel: GuildNSFWLevel;
    verificationLevel: GuildVerificationLevel;
    explicitContentFilter: GuildExplicitContentFilter;
    approximateMemberCount: number;
    approximatePresenceCount: number;
    memberCount: number | null;
    presenceCount: number | null;
    maxMembers: number;
    maxPresences: number;
    maxVideoChannelUsers: number;
    members: GuildMemberManager;
    large: boolean;
    icon: string | null;
    banner: string | null;
    splash: string | null;
    discoverySplash: string | null;
    joinedAt?: Date;
    get joinedTimestamp(): number;
    premiumTier: GuildPremiumTier;
    premiumSubscriptionCount: number;
    premiumProgressBarEnabled: boolean;
    defaultMessageNotifications: GuildDefaultMessageNotifications;
    vanityURLCode: string | null;
    afkTimeout: number | null;
    afkChannelId: Snowflake | null;
    widgetEnabled: boolean;
    widgetChannelId: Snowflake | null;
    rulesChannelId: Snowflake | null;
    systemChannelId: Snowflake | null;
    systemChannelFlags: GuildSystemChannelFlags | null;
    publicUpdatesChannelId: Snowflake | null;
    get afkChannel(): GuildChannel<APIGuildChannel<GuildChannelType>> | null | undefined;
    get systemChannel(): GuildChannel<APIGuildChannel<GuildChannelType>> | null | undefined;
    get widgetChannel(): GuildChannel<APIGuildChannel<GuildChannelType>> | null | undefined;
    get rulesChannel(): GuildChannel<APIGuildChannel<GuildChannelType>> | null | undefined;
    get publicUpdatesChannel(): GuildChannel<APIGuildChannel<GuildChannelType>> | null | undefined;
    channels: GuildChannelManager;
    get shardId(): number;
    get shard(): import("..").GatewayShard | undefined;
    constructor(client: Client);
    _deserialise(data: APIGuild | APIUnavailableGuild): this;
    fetch(force?: boolean): Promise<Guild>;
    edit(data: Partial<APIGuild>, reason?: string): Promise<this>;
    setIcon(icon: FileResolvable | null, reason?: string): Promise<this>;
    setBanner(banner: FileResolvable | null, reason?: string): Promise<this>;
    setSplash(splash: FileResolvable | null, reason?: string): Promise<this>;
    setDiscoverySplash(splash: FileResolvable | null, reason?: string): Promise<this>;
    setName(name: string, reason?: string): Promise<this>;
    setRegion(region: string, reason?: string): Promise<this>;
    setAFKTimeout(timeout: number, reason?: string): Promise<this>;
    setAFKChannel(channel: Snowflake, reason?: string): Promise<this>;
    setSystemChannel(channel: Snowflake, reason?: string): Promise<this>;
    setSystemChannelFlags(flags: GuildSystemChannelFlags, reason?: string): Promise<this>;
    setVerificationLevel(level: GuildVerificationLevel, reason?: string): Promise<this>;
    setExplicitContentFilter(filter: GuildExplicitContentFilter, reason?: string): Promise<this>;
    setDefaultMessageNotifications(notifications: GuildDefaultMessageNotifications, reason?: string): Promise<this>;
    setWidgetEnabled(enabled: boolean, reason?: string): Promise<this>;
    setWidgetChannel(channel: Snowflake, reason?: string): Promise<this>;
    setPublicUpdatesChannel(channel: Snowflake, reason?: string): Promise<this>;
    setMaxMembers(max: number, reason?: string): Promise<this>;
    setMaxPresences(max: number, reason?: string): Promise<this>;
    setMaxVideoChannelUsers(max: number, reason?: string): Promise<this>;
    setVanityURLCode(code: string, reason?: string): Promise<this>;
    setDescription(description: string, reason?: string): Promise<this>;
    delete(): Promise<void>;
    leave(): Promise<void>;
    toJSON(): APIGuild;
    get createChannel(): {
        (options: import("./managers/GuildChannelManager").CreateGuildChannelOptions): Promise<import("./GuildChannel").GuildChannels>;
        (name: string, type: GuildChannelType): Promise<import("./GuildChannel").GuildChannels>;
    };
}
