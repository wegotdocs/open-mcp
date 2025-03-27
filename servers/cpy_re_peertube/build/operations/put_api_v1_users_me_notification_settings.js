import { z } from "zod";
export const toolName = `put_api_v1_users_me_notification_settings`;
export const toolDescription = `Update my notification settings`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/me/notification-settings`;
export const method = `put`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "body": z.object({ "abuseAsModerator": z.number().int().describe("Notification type. One of the following values, or a sum of multiple values:\n- `0` NONE\n- `1` WEB\n- `2` EMAIL\n").optional(), "autoInstanceFollowing": z.number().int().describe("Notification type. One of the following values, or a sum of multiple values:\n- `0` NONE\n- `1` WEB\n- `2` EMAIL\n").optional(), "blacklistOnMyVideo": z.number().int().describe("Notification type. One of the following values, or a sum of multiple values:\n- `0` NONE\n- `1` WEB\n- `2` EMAIL\n").optional(), "commentMention": z.number().int().describe("Notification type. One of the following values, or a sum of multiple values:\n- `0` NONE\n- `1` WEB\n- `2` EMAIL\n").optional(), "myVideoImportFinished": z.number().int().describe("Notification type. One of the following values, or a sum of multiple values:\n- `0` NONE\n- `1` WEB\n- `2` EMAIL\n").optional(), "myVideoPublished": z.number().int().describe("Notification type. One of the following values, or a sum of multiple values:\n- `0` NONE\n- `1` WEB\n- `2` EMAIL\n").optional(), "newCommentOnMyVideo": z.number().int().describe("Notification type. One of the following values, or a sum of multiple values:\n- `0` NONE\n- `1` WEB\n- `2` EMAIL\n").optional(), "newFollow": z.number().int().describe("Notification type. One of the following values, or a sum of multiple values:\n- `0` NONE\n- `1` WEB\n- `2` EMAIL\n").optional(), "newInstanceFollower": z.number().int().describe("Notification type. One of the following values, or a sum of multiple values:\n- `0` NONE\n- `1` WEB\n- `2` EMAIL\n").optional(), "newUserRegistration": z.number().int().describe("Notification type. One of the following values, or a sum of multiple values:\n- `0` NONE\n- `1` WEB\n- `2` EMAIL\n").optional(), "newVideoFromSubscription": z.number().int().describe("Notification type. One of the following values, or a sum of multiple values:\n- `0` NONE\n- `1` WEB\n- `2` EMAIL\n").optional(), "videoAutoBlacklistAsModerator": z.number().int().describe("Notification type. One of the following values, or a sum of multiple values:\n- `0` NONE\n- `1` WEB\n- `2` EMAIL\n").optional() }).optional() }).shape;
