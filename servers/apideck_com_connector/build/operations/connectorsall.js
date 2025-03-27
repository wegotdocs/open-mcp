import { z } from "zod";
export const toolName = `connectorsall`;
export const toolDescription = `List Connectors`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/connector/connectors`;
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
export const inputParams = z.object({ "header": z.object({ "x-apideck-app-id": z.string().describe("The ID of your Unify application") }).optional(), "query": z.object({ "cursor": z.string().nullable().describe("Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.").optional(), "limit": z.number().int().gte(1).lte(200).describe("Number of results to return. Minimum 1, Maximum 200, Default 20"), "filter": z.object({ "status": z.enum(["live", "beta", "development", "considering"]).describe("Status of the connector. Connectors with status live or beta are callable.").optional(), "unified_api": z.enum(["accounting", "ats", "calendar", "crm", "csp", "customer-support", "ecommerce", "email", "email-marketing", "expense-management", "file-storage", "form", "hris", "lead", "payroll", "pos", "procurement", "project-management", "script", "sms", "spreadsheet", "team-messaging", "issue-tracking", "time-registration", "transactional-email", "vault"]).describe("Name of Apideck Unified API").optional() }).strict().describe("Apply filters").optional() }).optional() }).shape;
