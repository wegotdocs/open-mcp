export { inputParams } from "./schema/root.js";
export const toolName = `submit_billing_data`;
export const toolDescription = `Submit Billing Data`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/installations/{integrationConfigurationId}/billing`;
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
        "integrationConfigurationId"
    ],
    "cookie": [],
    "body": [
        "timestamp",
        "eod",
        "period",
        "billing",
        "usage"
    ]
};
export const flatMap = {};
