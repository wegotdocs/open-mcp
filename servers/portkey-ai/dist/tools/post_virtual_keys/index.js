export { inputParams } from "./schema/root.js";
export const toolName = `post_virtual_keys`;
export const toolDescription = `Create a Virtual Key`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/virtual-keys`;
export const method = `post`;
export const security = [
    {
        "key": "x-portkey-api-key",
        "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_PORTKEY_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "x-portkey-api-key"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "name",
        "provider",
        "key",
        "note",
        "apiVersion",
        "resourceName",
        "deploymentName",
        "workspace_id",
        "deploymentConfig",
        "usage_limits",
        "rate_limits"
    ]
};
export const flatMap = {};
