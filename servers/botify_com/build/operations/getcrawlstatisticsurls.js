import { z } from "zod";
export const toolName = `getcrawlstatisticsurls`;
export const toolDescription = `Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)`;
export const baseUrl = `https://api.botify.com/v1`;
export const path = `/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/urls/{list_type}`;
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
