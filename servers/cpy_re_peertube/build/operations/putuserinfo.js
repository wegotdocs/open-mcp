import { z } from "zod";
export const toolName = `putuserinfo`;
export const toolDescription = `Update my user information`;
export const baseUrl = `https://peertube2.cpy.re`;
export const path = `/api/v1/users/me`;
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
export const inputParams = z.object({ "body": z.any().optional() }).shape;
