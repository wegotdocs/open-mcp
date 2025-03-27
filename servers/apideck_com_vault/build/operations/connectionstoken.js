import { z } from "zod";
export const toolName = `connectionstoken`;
export const toolDescription = `Get Access Token`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/vault/connections/{unified_api}/{service_id}/token`;
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
export const inputParams = z.object({ "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application") }).optional(), "path": z.object({ "service_id": z.string().describe("Service ID of the resource to return"), "unified_api": z.string().describe("Unified API") }).optional(), "body": z.object({}).strict().optional() }).shape;
