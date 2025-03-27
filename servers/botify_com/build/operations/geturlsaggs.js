import { z } from "zod";
export const toolName = `geturlsaggs`;
export const toolDescription = `Query aggregator`;
export const baseUrl = `https://api.botify.com/v1`;
export const path = `/analyses/{username}/{project_slug}/{analysis_slug}/urls/aggs`;
export const method = `post`;
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
export const inputParams = z.object({ "query": z.object({ "area": z.enum(["current", "disappeared", "new", "search_engines_orphans"]) }).optional(), "body": z.array(z.object({ "aggs": z.array(z.record(z.any())).optional(), "filters": z.record(z.any()).optional() })).optional() }).shape;
