import { z } from "zod";
export const toolName = `logsall`;
export const toolDescription = `Get all consumer request logs`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/vault/logs`;
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
export const inputParams = z.object({ "header": z.object({ "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from") }).optional(), "query": z.object({ "filter": z.object({ "connector_id": z.string().nullable().optional(), "exclude_unified_apis": z.string().nullable().optional(), "status_code": z.number().nullable().optional() }).describe("Filter results").optional(), "cursor": z.string().nullable().describe("Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.").optional(), "limit": z.number().int().gte(1).lte(200).describe("Number of results to return. Minimum 1, Maximum 200, Default 20") }).optional() }).shape;
