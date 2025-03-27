import { z } from "zod";
export const toolName = `getganalyticsorphanurls`;
export const toolDescription = `List of Orphan URLs`;
export const baseUrl = `https://api.botify.com/v1`;
export const path = `/analyses/{username}/{project_slug}/{analysis_slug}/features/ganalytics/orphan_urls/{medium}/{source}`;
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
