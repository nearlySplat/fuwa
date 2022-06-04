/// <reference types="node" />
import { APIChannel, APIConnection, APIGuild, APIGuildMember, APIGuildWidget as RESTGetAPIGuildWidgetResult, APITemplate, APIThreadList, GuildWidgetStyle, RESTGetAPIAuditLogQuery, RESTGetAPIChannelInvitesResult, RESTGetAPIChannelMessageReactionUsersQuery, RESTGetAPIChannelMessageReactionUsersResult, RESTGetAPIChannelMessagesQuery, RESTGetAPIChannelMessagesResult, RESTGetAPIChannelPinsResult, RESTGetAPIChannelThreadMembersResult, RESTGetAPIChannelThreadsArchivedQuery, RESTGetAPICurrentUserGuildsQuery, RESTGetAPICurrentUserGuildsResult, RESTGetAPIGuildBansQuery, RESTGetAPIGuildBansResult, RESTGetAPIGuildChannelsResult, RESTGetAPIGuildEmojisResult, RESTGetAPIGuildIntegrationsResult, RESTGetAPIGuildInvitesResult, RESTGetAPIGuildMembersQuery, RESTGetAPIGuildMembersResult, RESTGetAPIGuildPruneCountQuery, RESTGetAPIGuildPruneCountResult, RESTGetAPIGuildRolesResult, RESTGetAPIGuildScheduledEventUsersQuery, RESTGetAPIGuildScheduledEventUsersResult, RESTGetAPIGuildScheduledEventsResult, RESTGetAPIGuildStickersResult, RESTGetAPIGuildTemplatesResult, RESTGetAPIGuildVanityUrlResult, RESTGetAPIGuildVoiceRegionsResult, RESTGetAPIInviteQuery, RESTGetNitroStickerPacksResult, RESTPatchAPIChannelJSONBody, RESTPatchAPIChannelMessageJSONBody, RESTPatchAPICurrentUserJSONBody, RESTPatchAPIGuildChannelPositionsJSONBody, RESTPatchAPIGuildEmojiJSONBody, RESTPatchAPIGuildJSONBody, RESTPatchAPIGuildMemberJSONBody, RESTPatchAPIGuildRoleJSONBody, RESTPatchAPIGuildRolePositionsJSONBody, RESTPatchAPIGuildRolePositionsResult, RESTPatchAPIGuildScheduledEventJSONBody, RESTPatchAPIGuildStickerJSONBody, RESTPatchAPIGuildVoiceStateCurrentMemberJSONBody, RESTPatchAPIGuildVoiceStateUserJSONBody, RESTPatchAPIGuildWelcomeScreenJSONBody, RESTPatchAPIGuildWidgetSettingsJSONBody, RESTPatchAPIStageInstanceJSONBody, RESTPostAPIChannelInviteJSONBody, RESTPostAPIChannelMessageJSONBody, RESTPostAPIChannelMessagesThreadsJSONBody, RESTPostAPIChannelThreadsJSONBody, RESTPostAPIGuildChannelJSONBody, RESTPostAPIGuildForumThreadsJSONBody, RESTPostAPIGuildPruneJSONBody, RESTPostAPIGuildPruneResult, RESTPostAPIGuildRoleJSONBody, RESTPostAPIGuildScheduledEventJSONBody, RESTPostAPIGuildStickerFormDataBody, RESTPostAPIStageInstanceJSONBody, RESTPutAPIChannelPermissionJSONBody, RESTPutAPIGuildBanJSONBody, RESTPutAPIGuildMemberJSONBody, APIVoiceRegion, RESTPostAPIChannelWebhookJSONBody, APIWebhook, RESTPatchAPIWebhookJSONBody, RESTPostAPIWebhookWithTokenJSONBody, RESTPostAPIWebhookWithTokenQuery, RESTPatchAPIWebhookWithTokenMessageJSONBody, RESTGetAPIOAuth2CurrentAuthorizationResult, RESTGetAPIOAuth2CurrentApplicationResult, RESTPostAPIInteractionCallbackJSONBody, RESTPatchAPIInteractionOriginalResponseJSONBody, RESTPostAPIInteractionFollowupJSONBody } from 'discord-api-types/v10';
import { ResponseData } from 'undici/types/dispatcher';
import { APIRequest, File as FileData } from './APIRequest.js';
import { RequestManager, RequestManagerOptions, RouteLike } from './RequestManager.js';
import { RESTClientOptions } from './RESTClient.js';
declare type RequestOptions = Partial<APIRequest & {
    buf: boolean;
}>;
declare type Awaitable<T> = Promise<T> | T;
declare type File = Required<Omit<FileData, 'filename' | 'key'>>;
export declare class REST extends RequestManager {
    beforeRequest: ((options: RequestOptions) => Awaitable<void | RequestOptions>) | undefined;
    afterRequest: ((options: RequestOptions, response: ResponseData, text: string, json: any | null) => Awaitable<void>) | undefined;
    constructor(token?: string | undefined, options?: RESTClientOptions, managerOptions?: RequestManagerOptions);
    token(token?: string | null): string | this | undefined;
    before(cb: REST['beforeRequest']): this;
    after(cb: REST['afterRequest']): this;
    request<T>(options: APIRequest & {
        buf?: boolean;
    }): Promise<T>;
    get<T>(route: RouteLike, options?: RequestOptions): Promise<T>;
    post<T>(route: RouteLike, options: RequestOptions): Promise<T>;
    put<T>(route: RouteLike, options: RequestOptions): Promise<T>;
    patch<T>(route: RouteLike, options: RequestOptions): Promise<T>;
    delete<T>(route: RouteLike, options?: RequestOptions): Promise<T>;
    options<T>(route: RouteLike, options?: RequestOptions): Promise<T>;
    head<T>(route: RouteLike, options?: RequestOptions): Promise<T>;
    getGuildAuditLog(guildID: string, options: RESTGetAPIAuditLogQuery): Promise<import("discord-api-types/v10").APIAuditLog>;
    getChannel(id: string): Promise<APIChannel>;
    editChannel(id: string, data: RESTPatchAPIChannelJSONBody, reason?: string): Promise<APIChannel>;
    deleteChannel(id: string, reason?: string): Promise<APIChannel>;
    closeDM(channelID: string): Promise<APIChannel>;
    getChannelMessages(channelID: string, options: RESTGetAPIChannelMessagesQuery): Promise<RESTGetAPIChannelMessagesResult>;
    getChannelMessage(channelID: string, messageID: string): Promise<import("discord-api-types/v10").APIMessage>;
    createMessage(channelID: string, data: RESTPostAPIChannelMessageJSONBody, files?: File[]): Promise<import("discord-api-types/v10").APIMessage>;
    crosspostMessage(channelID: string, messageID: string): Promise<import("discord-api-types/v10").APIMessage>;
    createReaction(channelID: string, messageID: string, emoji: string): Promise<never>;
    deleteOwnReaction(channelID: string, messageID: string, emoji: string): Promise<unknown>;
    deleteUserReaction(channelID: string, messageID: string, emoji: string, userID: string): Promise<unknown>;
    getReactions(channelID: string, messageID: string, emoji: string, options?: RESTGetAPIChannelMessageReactionUsersQuery): Promise<RESTGetAPIChannelMessageReactionUsersResult>;
    deleteAllReactions(channelID: string, messageID: string): Promise<unknown>;
    deleteAllReactionsForEmoji(channelID: string, messageID: string, emoji: string): Promise<unknown>;
    editMessage(channelID: string, messageID: string, data: RESTPatchAPIChannelMessageJSONBody, files?: File[]): Promise<import("discord-api-types/v10").APIMessage>;
    deleteMessage(channelID: string, messageID: string, reason?: string): Promise<never>;
    bulkDeleteMessages(channelID: string, messages: string[] | number, reason?: string): Promise<never>;
    editChannelPermissions(channelID: string, overwriteID: string, data: RESTPutAPIChannelPermissionJSONBody, reason?: string): Promise<never>;
    getChannelInvites(channelID: string): Promise<RESTGetAPIChannelInvitesResult>;
    createChannelInvite(channelID: string, data: RESTPostAPIChannelInviteJSONBody, reason?: string): Promise<import("discord-api-types/v10").APIExtendedInvite>;
    deleteChannelPermission(channelID: string, overwriteID: string, reason?: string): Promise<never>;
    followNewsChannel(channelID: string, webhookChannelID: string): Promise<import("discord-api-types/v10").APIFollowedChannel>;
    triggerTypingIndicator(channelID: string): Promise<never>;
    getPinnedMessages(channelID: string): Promise<RESTGetAPIChannelPinsResult>;
    pinMessage(channelID: string, messageID: string, reason?: string): Promise<never>;
    unpinMessage(channelID: string, messageID: string, reason?: string): Promise<never>;
    addGroupDMRecipient(channelID: string, userID: string, accessToken: string, nickname?: string): Promise<unknown>;
    removeGroupDMRecipient(channelID: string, userID: string): Promise<unknown>;
    startThreadFromMessage(channelID: string, messageID: string, data: RESTPostAPIChannelMessagesThreadsJSONBody, reason?: string): Promise<APIChannel>;
    startThread(channelID: string, data: RESTPostAPIChannelThreadsJSONBody, reason?: string): Promise<APIChannel>;
    startThreadInForumChannel(channelID: string, data: RESTPostAPIGuildForumThreadsJSONBody, { reason, files }?: {
        reason?: string;
        files?: File[];
    }): Promise<RESTPostAPIGuildForumThreadsJSONBody>;
    joinThread(channelID: string): Promise<never>;
    addThreadMember(channelID: string, userID: string): Promise<never>;
    leaveThread(channelID: string): Promise<never>;
    removeThreadMember(channelID: string, userID: string): Promise<never>;
    getThreadMember(channelID: string, userID: string): Promise<RESTGetAPIChannelThreadMembersResult>;
    listThreadMembers(channelID: string): Promise<RESTGetAPIChannelThreadMembersResult>;
    listActiveThreads(channelID: string): Promise<APIThreadList>;
    listPublicArchivedThreads(channelID: string, options?: RESTGetAPIChannelThreadsArchivedQuery): Promise<APIThreadList>;
    listPrivateArchivedThreads(channelID: string, options?: RESTGetAPIChannelThreadsArchivedQuery): Promise<APIThreadList>;
    listJoinedPrivateArchivedThreads(channelID: string, options?: RESTGetAPIChannelThreadsArchivedQuery): Promise<APIThreadList>;
    listGuildEmojis(guildID: string): Promise<RESTGetAPIGuildEmojisResult>;
    getGuildEmoji(guildID: string, emojiID: string): Promise<import("discord-api-types/v10").APIEmoji>;
    createGuildEmoji(guildID: string, name: string, data: File, roles?: string[], reason?: string): Promise<import("discord-api-types/v10").APIEmoji>;
    editGuildEmoji(guildID: string, emojiID: string, data: RESTPatchAPIGuildEmojiJSONBody, reason?: string): Promise<import("discord-api-types/v10").APIEmoji>;
    deleteGuildEmoji(guildID: string, emojiID: string, reason?: string): Promise<never>;
    getGuild(guildID: string, withCounts?: boolean): Promise<APIGuild>;
    getGuildPreview(guildID: string): Promise<import("discord-api-types/v10").APIGuildPreview>;
    editGuild(guildID: string, data: RESTPatchAPIGuildJSONBody, reason?: string): Promise<APIGuild>;
    deleteGuild(guildID: string): Promise<never>;
    getGuildChannels(guildID: string): Promise<RESTGetAPIGuildChannelsResult>;
    createGuildChannel(guildID: string, data: RESTPostAPIGuildChannelJSONBody, reason?: string): Promise<APIChannel>;
    editGuildChannelPositions(guildID: string, data: RESTPatchAPIGuildChannelPositionsJSONBody, reason?: string): Promise<never>;
    getGuildMember(guildID: string, userID: string): Promise<APIGuildMember>;
    listGuildMembers(guildID: string, options?: RESTGetAPIGuildMembersQuery): Promise<RESTGetAPIGuildMembersResult>;
    searchGuildMembers(guildID: string, query: string, limit?: number): Promise<RESTGetAPIGuildMembersResult>;
    addGuildMember(guildID: string, userID: string, accessToken: string, data?: Omit<RESTPutAPIGuildMemberJSONBody, 'access_token'>): Promise<APIGuildMember>;
    editGuildMember(guildID: string, userID: string, data: RESTPatchAPIGuildMemberJSONBody, reason?: string): Promise<APIGuildMember>;
    editCurrentMember(guildID: string, nickname?: string, reason?: string): Promise<APIGuildMember>;
    editCurrentUserNick(guildID: string, nickname?: string, reason?: string): Promise<APIGuildMember>;
    addGuildMemberRole(guildID: string, userID: string, roleID: string, reason?: string): Promise<never>;
    removeGuildMemberRole(guildID: string, userID: string, roleID: string, reason?: string): Promise<never>;
    removeGuildMember(guildID: string, userID: string, reason?: string): Promise<never>;
    getGuildBans(guildID: string, options?: RESTGetAPIGuildBansQuery): Promise<RESTGetAPIGuildBansResult>;
    getGuildBan(guildID: string, userID: string): Promise<import("discord-api-types/v10").APIBan>;
    createGuildBan(guildID: string, userID: string, data: RESTPutAPIGuildBanJSONBody, reason?: string): Promise<never>;
    removeGuildBan(guildID: string, userID: string, reason?: string): Promise<never>;
    getGuildRoles(guildID: string): Promise<RESTGetAPIGuildRolesResult>;
    createGuildRole(guildID: string, data: RESTPostAPIGuildRoleJSONBody & {
        icon: Omit<File, 'filename' | 'key'> | string;
    }, reason?: string): Promise<import("discord-api-types/v10").APIRole>;
    editGuildRolePositions(guildID: string, data: RESTPatchAPIGuildRolePositionsJSONBody, reason?: string): Promise<RESTPatchAPIGuildRolePositionsResult>;
    editGuildRole(guildID: string, roleID: string, data: RESTPatchAPIGuildRoleJSONBody, reason?: string): Promise<import("discord-api-types/v10").APIRole>;
    deleteGuildRole(guildID: string, roleID: string, reason?: string): Promise<never>;
    getGuildPruneCount(guildID: string, options?: RESTGetAPIGuildPruneCountQuery): Promise<RESTGetAPIGuildPruneCountResult>;
    startGuildPrune(guildID: string, options?: RESTPostAPIGuildPruneJSONBody, reason?: string): Promise<RESTPostAPIGuildPruneResult>;
    getGuildVoiceRegions(guildID: string): Promise<RESTGetAPIGuildVoiceRegionsResult>;
    getGuildInvites(guildID: string): Promise<RESTGetAPIGuildInvitesResult>;
    getGuildIntegrations(guildID: string): Promise<RESTGetAPIGuildIntegrationsResult>;
    deleteGuildIntegration(guildID: string, integrationID: string, reason?: string): Promise<never>;
    getGuildWidgetSettings(guildID: string): Promise<import("discord-api-types/v10").APIGuildWidgetSettings>;
    editGuildWidgetSettings(guildID: string, data: RESTPatchAPIGuildWidgetSettingsJSONBody, reason?: string): Promise<import("discord-api-types/v10").APIGuildWidgetSettings>;
    getGuildWidgetData(guildID: string): Promise<RESTGetAPIGuildWidgetResult>;
    getGuildVanity(guildID: string): Promise<RESTGetAPIGuildVanityUrlResult>;
    getGuildWidgetImage(guildID: string, style: GuildWidgetStyle): Promise<Buffer>;
    getGuildWelcomeScreen(guildID: string): Promise<import("discord-api-types/v10").APIGuildWelcomeScreen>;
    editGuildWelcomeScreen(guildID: string, data: RESTPatchAPIGuildWelcomeScreenJSONBody, reason?: string): Promise<import("discord-api-types/v10").APIGuildWelcomeScreen>;
    editUserVoiceState(guildID: string, userID: string, data: RESTPatchAPIGuildVoiceStateUserJSONBody & {
        request_to_speak_timestamp?: string;
    }, reason?: string): Promise<never>;
    editCurrentUserVoiceState(guildID: string, data: RESTPatchAPIGuildVoiceStateCurrentMemberJSONBody, reason?: string): Promise<never>;
    listGuildScheduledEvents(guildID: string, withUserCount?: boolean): Promise<RESTGetAPIGuildScheduledEventsResult>;
    createGuildScheduledEvent(guildID: string, data: Omit<RESTPostAPIGuildScheduledEventJSONBody, 'image'>, { image, reason }?: {
        image?: File;
        reason?: string;
    }): Promise<import("discord-api-types/v10").APIGuildScheduledEvent>;
    getGuildScheduledEvent(guildID: string, scheduledEventID: string, withUserCount?: boolean): Promise<import("discord-api-types/v10").APIGuildScheduledEvent>;
    editGuildScheduledEvent(guildID: string, scheduledEventID: string, data: Omit<RESTPatchAPIGuildScheduledEventJSONBody, 'image'>, { image, reason }?: {
        image?: File;
        reason?: string;
    }): Promise<import("discord-api-types/v10").APIGuildScheduledEvent>;
    deleteGuildScheduledEvent(guildID: string, scheduledEventID: string): Promise<never>;
    getGuildScheduledEventUsers(guildID: string, scheduledEventID: string, options: RESTGetAPIGuildScheduledEventUsersQuery): Promise<RESTGetAPIGuildScheduledEventUsersResult>;
    getGuildTemplate(code: string): Promise<APITemplate>;
    createGuildFromTemplate(code: string, data: {
        name: string;
        icon: File;
    }): Promise<APIGuild>;
    getGuildTemplates(guildID: string): Promise<RESTGetAPIGuildTemplatesResult>;
    createGuildTemplate(guildID: string, data: {
        name: string;
        description: string;
    }): Promise<APITemplate>;
    syncGuildTemplate(guildID: string, code: string): Promise<APITemplate>;
    editGuildTemplate(guildID: string, code: string, data: {
        name: string;
        description: string;
    }): Promise<APITemplate>;
    deleteGuildTemplate(guildID: string, code: string): Promise<APITemplate>;
    getInvite(code: string, options?: RESTGetAPIInviteQuery): Promise<import("discord-api-types/v10").APIInvite>;
    deleteInvite(code: string): Promise<import("discord-api-types/v10").APIInvite>;
    createStageInstance(channelID: string, data: Omit<RESTPostAPIStageInstanceJSONBody, 'channel_id'>, reason?: string): Promise<import("discord-api-types/v10").APIStageInstance>;
    getStageInstance(channelID: string): Promise<import("discord-api-types/v10").APIStageInstance>;
    editStageInstance(channelID: string, data: RESTPatchAPIStageInstanceJSONBody, reason?: string): Promise<import("discord-api-types/v10").APIStageInstance>;
    deleteStageInstance(channelID: string): Promise<never>;
    getSticker(stickerID: string): Promise<import("discord-api-types/v10").APISticker>;
    listPremiumStickerPacks(): Promise<RESTGetNitroStickerPacksResult>;
    listGuildStickers(guildID: string): Promise<RESTGetAPIGuildStickersResult>;
    getGuildSticker(guildID: string, stickerID: string): Promise<import("discord-api-types/v10").APISticker>;
    createGuildSticker(guildID: string, data: Omit<RESTPostAPIGuildStickerFormDataBody, 'file'>, image: File, reason?: string): Promise<import("discord-api-types/v10").APISticker>;
    editGuildSticker(guildID: string, stickerID: string, data: RESTPatchAPIGuildStickerJSONBody, reason?: string): Promise<import("discord-api-types/v10").APISticker>;
    deleteGuildSticker(guildID: string, stickerID: string, reason?: string): Promise<never>;
    getCurrentUser(): Promise<import("discord-api-types/v10").APIUser>;
    getUser(userID: string): Promise<import("discord-api-types/v10").APIUser>;
    editCurrentUser(data: RESTPatchAPICurrentUserJSONBody): Promise<import("discord-api-types/v10").APIUser>;
    getCurrentUserGuilds(options?: RESTGetAPICurrentUserGuildsQuery): Promise<RESTGetAPICurrentUserGuildsResult>;
    getCurrentGuildMember(guildID: string): Promise<APIGuildMember>;
    leaveGuild(guildID: string): Promise<never>;
    createDM(recipientID: string): Promise<APIChannel>;
    createGroupDM(accessTokens: string[], nicks?: Record<string, string>): Promise<APIChannel>;
    getUserConnections(userID: string): Promise<APIConnection>;
    listVoiceRegions(): Promise<APIVoiceRegion[]>;
    createWebhook(channelID: string, data: RESTPostAPIChannelWebhookJSONBody, reason?: string): Promise<APIWebhook>;
    getChannelWebhooks(channelID: string): Promise<APIWebhook[]>;
    getGuildWebhooks(guildID: string): Promise<APIWebhook[]>;
    getWebhook(webhookID: string): Promise<APIWebhook>;
    getWebhookWithToken(webhookID: string, token: string): Promise<APIWebhook>;
    editWebhook(webhookID: string, data: RESTPatchAPIWebhookJSONBody, reason?: string): Promise<APIWebhook>;
    editWebhookWithToken(webhookID: string, token: string, data: Omit<RESTPatchAPIWebhookJSONBody, 'channel_id'>): Promise<Omit<APIWebhook, "user">>;
    deleteWebhook(webhookID: string, reason?: string): Promise<never>;
    deleteWebhookWithToken(webhookID: string, token: string): Promise<never>;
    executeWebhook<T = RESTPostAPIWebhookWithTokenJSONBody>(webhookID: string, token: string, data: T, { files, ...options }?: RESTPostAPIWebhookWithTokenQuery & {
        files?: FileData[];
    }, ext?: string): Promise<import("discord-api-types/v10").APIMessage>;
    executeWebhookSlack(webhookID: string, token: string, data: any, options: RESTPostAPIWebhookWithTokenQuery): Promise<import("discord-api-types/v10").APIMessage>;
    executeWebhookGitHub(webhookID: string, token: string, data: any, options: RESTPostAPIWebhookWithTokenQuery): Promise<import("discord-api-types/v10").APIMessage>;
    getWebhookMessage(webhookID: string, token: string, messageID: string, threadID?: string): Promise<import("discord-api-types/v10").APIMessage>;
    editWebhookMessage(webhookID: string, token: string, messageID: string, data: RESTPatchAPIWebhookWithTokenMessageJSONBody, { files, ...options }?: {
        thread_id?: string;
        files?: FileData[];
    }): Promise<import("discord-api-types/v10").APIMessage>;
    deleteWebhookMessage(webhookID: string, token: string, messageID: string, threadID?: string): Promise<never>;
    getGateway(): Promise<import("discord-api-types/v10").APIGatewayInfo>;
    getGatewayBot(): Promise<import("discord-api-types/v10").APIGatewayBotInfo>;
    getCurrentOAuth2Authorization(): Promise<RESTGetAPIOAuth2CurrentAuthorizationResult>;
    getCurrentBotApplication(): Promise<RESTGetAPIOAuth2CurrentApplicationResult>;
    createInteractionResponse(interactionID: string, token: string, data: RESTPostAPIInteractionCallbackJSONBody, files?: FileData[]): Promise<never>;
    getOriginalInteractionResponse(applicationID: string, interactionToken: string): Promise<import("discord-api-types/v10").APIMessage>;
    editOriginalInteractionResponse(applicationID: string, interactionToken: string, data: RESTPatchAPIInteractionOriginalResponseJSONBody, files?: FileData[]): Promise<import("discord-api-types/v10").APIMessage>;
    deleteOriginalInteractionResponse(applicationID: string, interactionToken: string): Promise<never>;
    createFollowupMessage(applicationID: string, interactionToken: string, data: RESTPostAPIInteractionFollowupJSONBody, files?: FileData[]): Promise<import("discord-api-types/v10").APIMessage>;
}
export {};
