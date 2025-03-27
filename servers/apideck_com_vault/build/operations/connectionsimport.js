import { z } from "zod";
export const toolName = `connectionsimport`;
export const toolDescription = `Import connection`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/vault/connections/{unified_api}/{service_id}/import`;
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
export const inputParams = z.object({ "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application") }).optional(), "path": z.object({ "service_id": z.string().describe("Service ID of the resource to return"), "unified_api": z.string().describe("Unified API") }).optional(), "body": z.object({ "credentials": z.object({ "access_token": z.string().describe("Access token").optional(), "expires_in": z.number().int().nullable().describe("The number of seconds until the token expires. If omitted the token will be queued for refresh.").optional(), "issued_at": z.string().datetime({ offset: true }).nullable().describe("The datetime at which the token was issued. If omitted the token will be queued for refresh.").optional(), "refresh_token": z.string().describe("The refresh token can be used to obtain a new access token.") }).strict().optional(), "metadata": z.object({}).catchall(z.any()).nullable().describe("Attach your own consumer specific metadata").optional(), "settings": z.record(z.any()).nullable().describe("Connection settings. Values will persist to `form_fields` with corresponding id").optional() }).optional() }).shape;
