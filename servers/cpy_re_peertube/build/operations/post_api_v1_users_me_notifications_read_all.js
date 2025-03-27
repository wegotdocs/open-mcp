import { z } from "zod";
export const toolName = `post_api_v1_users_me_notifications_read_all`;
export const toolDescription = `Mark all my notification as read`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/me/notifications/read-all`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({}).shape;
