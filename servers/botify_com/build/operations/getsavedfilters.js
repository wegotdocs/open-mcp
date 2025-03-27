import { z } from "zod";
export const toolName = `getsavedfilters`;
export const toolDescription = `List all the project's saved filters (each filter's name, ID and filter value)`;
export const baseUrl = `https://api.botify.com/v1`;
export const path = `/projects/{username}/{project_slug}/filters`;
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
export const inputParams = z.object({ "query": z.object({ "page": z.number().int().describe("Page Number").optional(), "size": z.number().int().describe("Page Size").optional() }).optional() }).shape;
