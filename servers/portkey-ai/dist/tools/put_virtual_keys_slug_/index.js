export { inputParams } from "./schema/root.js";
export const toolName = `put_virtual_keys_slug_`;
export const toolDescription = `Update a Virtual Key`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/virtual-keys/{slug}`;
export const method = `put`;
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
    "path": [
        "slug"
    ],
    "cookie": [],
    "body": [
        "name",
        "key",
        "note",
        "deploymentConfig",
        "usage_limits"
    ]
};
export const flatMap = {};
