export { inputParams } from "./schema/root.js";
export const toolName = `update_invoice`;
export const toolDescription = `Invoice Actions`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/installations/{integrationConfigurationId}/billing/invoices/{invoiceId}/actions`;
export const method = `post`;
export const security = [
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
        "integrationConfigurationId",
        "invoiceId"
    ],
    "cookie": [],
    "body": [
        "action",
        "reason",
        "total"
    ]
};
export const flatMap = {};
