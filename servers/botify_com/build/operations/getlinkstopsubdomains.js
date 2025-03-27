import { z } from "zod";
export const toolName = `getlinkstopsubdomains`;
export const toolDescription = `Top subddomains`;
export const baseUrl = `https://api.botify.com/v1`;
export const path = `/analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/subdomains`;
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
