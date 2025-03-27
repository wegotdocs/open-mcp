import { z } from "zod";
export const toolName = `tendersupdate`;
export const toolDescription = `Update Tender`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/pos/tenders/{id}`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("ID of the record you are acting upon.") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "body": z.object({ "active": z.boolean().nullable().optional(), "allows_tipping": z.boolean().describe("Allow tipping on payment from tender"), "created_at": z.string().datetime({ offset: true }).describe("The date and time when the object was created.").readonly().optional(), "created_by": z.string().nullable().describe("The user who created the object.").readonly().optional(), "editable": z.boolean().nullable().optional(), "hidden": z.boolean().nullable().optional(), "id": z.string().describe("A unique identifier for an object.").readonly().optional(), "key": z.string().nullable().optional(), "label": z.string().nullable().optional(), "opens_cash_drawer": z.boolean().describe("If this tender opens the cash drawer"), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time when the object was last updated.").readonly().optional(), "updated_by": z.string().nullable().describe("The user who last updated the object.").readonly().optional() }).strict().optional() }).shape;
