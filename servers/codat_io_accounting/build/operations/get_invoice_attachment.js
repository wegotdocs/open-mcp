import { z } from "zod";
export const toolName = `get_invoice_attachment`;
export const toolDescription = `Get invoice attachment`;
export const baseUrl = `https://api.codat.io`;
export const path = `/companies/{companyId}/connections/{connectionId}/data/invoices/{invoiceId}/attachments/{attachmentId}`;
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
export const inputParams = z.object({ "path": z.object({ "invoiceId": z.string().uuid().describe("Unique identifier for an invoice"), "attachmentId": z.string().uuid().describe("Unique identifier for an attachment") }).optional() }).shape;
