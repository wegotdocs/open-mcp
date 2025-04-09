export { inputParams } from "./schema/root.js";
export const toolName = `update_integration_deployment_action`;
export const toolDescription = `Update deployment integration action`;
export const baseUrl = `https://api.vercel.com`;
export const path = `/v1/deployments/{deploymentId}/integrations/{integrationConfigurationId}/resources/{resourceId}/actions/{action}`;
export const method = `patch`;
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
        "deploymentId",
        "integrationConfigurationId",
        "resourceId",
        "action"
    ],
    "cookie": [],
    "body": [
        "status",
        "statusText",
        "outcomes"
    ]
};
export const flatMap = {};
