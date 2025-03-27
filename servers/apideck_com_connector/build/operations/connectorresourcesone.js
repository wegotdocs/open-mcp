import { z } from "zod";
export const toolName = `connectorresourcesone`;
export const toolDescription = `Get Connector Resource`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/connector/connectors/{id}/resources/{resource_id}`;
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
export const inputParams = z.object({ "header": z.object({ "x-apideck-app-id": z.string().describe("The ID of your Unify application") }).optional(), "path": z.object({ "id": z.string().describe("ID of the record you are acting upon."), "resource_id": z.string().describe("ID of the resource you are acting upon.") }).optional(), "query": z.object({ "unified_api": z.enum(["accounting", "ats", "calendar", "crm", "csp", "customer-support", "ecommerce", "email", "email-marketing", "expense-management", "file-storage", "form", "hris", "lead", "payroll", "pos", "procurement", "project-management", "script", "sms", "spreadsheet", "team-messaging", "issue-tracking", "time-registration", "transactional-email", "vault"]).describe("Name of Apideck Unified API").optional() }).optional() }).shape;
