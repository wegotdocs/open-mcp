import { z } from "zod";
export const toolName = `post_media`;
export const toolDescription = `Submit a new media file`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/media`;
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
export const inputParams = z.object({ "body": z.string().optional() }).shape;
