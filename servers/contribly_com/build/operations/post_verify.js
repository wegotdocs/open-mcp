import { z } from "zod";
export const toolName = `post_verify`;
export const toolDescription = `Verify token and return details of the owning user`;
export const baseUrl = `https://api.contribly.com/1`;
export const path = `/verify`;
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
