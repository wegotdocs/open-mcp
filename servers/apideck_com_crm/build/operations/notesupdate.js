import { z } from "zod";
export const toolName = `notesupdate`;
export const toolDescription = `Update note`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/crm/notes/{id}`;
export const method = `patch`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("ID of the record you are acting upon.") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "body": z.object({ "active": z.boolean().nullable().optional(), "company_id": z.string().nullable().optional(), "contact_id": z.string().nullable().optional(), "content": z.string().optional(), "created_at": z.string().readonly().optional(), "created_by": z.string().nullable().readonly().optional(), "id": z.string().readonly().optional(), "lead_id": z.string().nullable().optional(), "opportunity_id": z.string().nullable().optional(), "owner_id": z.string().optional(), "title": z.string().optional(), "updated_at": z.string().readonly().optional(), "updated_by": z.string().nullable().readonly().optional() }).strict().optional() }).shape;
