import { z } from "zod";
export const toolName = `taxratesupdate`;
export const toolDescription = `Update Tax Rate`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/accounting/tax-rates/{id}`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("ID of the record you are acting upon.") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "body": z.object({ "code": z.string().nullable().describe("Tax code assigned to identify this tax rate.").optional(), "components": z.array(z.any()).nullable().optional(), "created_at": z.string().datetime({ offset: true }).describe("The date and time when the object was created.").readonly().optional(), "created_by": z.string().nullable().describe("The user who created the object.").readonly().optional(), "description": z.string().nullable().describe("Description of tax rate").optional(), "effective_tax_rate": z.number().nullable().describe("Effective tax rate").optional(), "id": z.string().nullable().describe("ID assigned to identify this tax rate.").optional(), "name": z.string().min(1).describe("Name assigned to identify this tax rate.").optional(), "original_tax_rate_id": z.string().nullable().describe("ID of the original tax rate from which the new tax rate is derived. Helps to understand the relationship between corresponding tax rate entities.").optional(), "report_tax_type": z.string().nullable().describe("Report Tax type to aggregate tax collected or paid for reporting purposes").optional(), "row_version": z.string().nullable().describe("A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.").optional(), "status": z.enum(["active", "inactive", "archived"]).nullable().describe("Tax rate status").optional(), "tax_payable_account_id": z.string().nullable().describe("Unique identifier for the account for tax collected.").optional(), "tax_remitted_account_id": z.string().nullable().describe("Unique identifier for the account for tax remitted.").optional(), "total_tax_rate": z.number().nullable().describe("Not compounded sum of the components of a tax rate").optional(), "type": z.string().nullable().describe("Tax type used to indicate the source of tax collected or paid").optional(), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time when the object was last updated.").readonly().optional(), "updated_by": z.string().nullable().describe("The user who last updated the object.").readonly().optional() }).strict().optional() }).shape;
