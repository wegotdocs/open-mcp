import { z } from "zod";
export const toolName = `postinvoicesinvoiceupdatelines`;
export const toolDescription = `Bulk update invoice line items`;
export const baseUrl = `https://api.stripe.com`;
export const path = `/v1/invoices/{invoice}/update_lines`;
export const method = `post`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "invoice"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "invoice": z.string().max(5000)
};
