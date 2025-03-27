import { z } from "zod";
export const toolName = `getprojecturlsaggs`;
export const toolDescription = `Project Query aggregator`;
export const baseUrl = `https://api.botify.com/v1`;
export const path = `/projects/{username}/{project_slug}/urls/aggs`;
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
export const inputParams = z.object({ "query": z.object({ "area": z.enum(["current", "disappeared", "new"]).describe("Analysis context to execute the queries"), "last_analysis_slug": z.string().describe("Last analysis on the trend").optional(), "nb_analyses": z.number().int().gte(1).lte(20).describe("Max number of analysis to return") }).optional(), "body": z.array(z.object({ "aggs": z.array(z.record(z.any())).optional(), "filters": z.record(z.any()).optional() })).optional() }).shape;
