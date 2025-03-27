import { z } from "zod";
export const toolName = `connectionsall`;
export const toolDescription = `Get all connections`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/vault/connections`;
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
export const inputParams = z.object({ "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application") }).optional(), "query": z.object({ "api": z.string().describe("Scope results to Unified API").optional(), "configured": z.boolean().describe("Scopes results to connections that have been configured or not").optional() }).optional() }).shape;
