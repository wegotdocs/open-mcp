import { z } from "zod";
export const toolName = `get_api_v1_users_me_video_quota_used`;
export const toolDescription = `Get my user used quota`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/me/video-quota-used`;
export const method = `get`;
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
