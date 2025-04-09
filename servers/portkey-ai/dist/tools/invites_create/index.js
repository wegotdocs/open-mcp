export { inputParams } from "./schema/root.js";
export const toolName = `invites_create`;
export const toolDescription = `Invite User`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/admin/users/invites`;
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
        "email",
        "workspaces",
        "role",
        "workspace_api_key_details"
    ]
};
export const flatMap = {};
