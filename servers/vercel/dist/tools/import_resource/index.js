export { inputParams } from "./schema/root.js";
export const toolName = `import_resource`;
export const toolDescription = `Import Resource`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/installations/{integrationConfigurationId}/resources/{resourceId}`;
export const method = `put`;
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
        "resourceId"
    ],
    "cookie": [],
    "body": [
        "productId",
        "name",
        "status",
        "metadata",
        "billingPlan",
        "notification",
        "secrets"
    ]
};
export const flatMap = {};
