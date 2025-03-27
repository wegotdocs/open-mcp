import { z } from "zod";
export const toolName = `getsavedfilter`;
export const toolDescription = `Retrieves a specific saved filter's name, ID and filter value`;
export const baseUrl = `https://api.botify.com/v1`;
export const path = `/projects/{username}/{project_slug}/filters/{identifier}`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
        "in": "header",
        "envVarName": "AUTHORIZATION",
        "schemeType": "apiKey",
        "schemeName": "Authorization"
    }
];
export const inputParams = z.object({}).shape;
