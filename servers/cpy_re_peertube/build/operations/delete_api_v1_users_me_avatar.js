import { z } from "zod";
export const toolName = `delete_api_v1_users_me_avatar`;
export const toolDescription = `Delete my avatar`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/me/avatar`;
export const method = `delete`;
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
