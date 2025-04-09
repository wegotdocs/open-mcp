export { inputParams } from "./schema/root.js";
export const toolName = `update_resource_secrets_by_id`;
export const toolDescription = `Update Resource Secrets`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/installations/{integrationConfigurationId}/resources/{resourceId}/secrets`;
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
        "secrets",
        "partial"
    ]
};
export const flatMap = {};
