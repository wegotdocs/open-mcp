export { inputParams } from "./schema/root.js";
export const toolName = `post_admin_workspaces`;
export const toolDescription = `Create Workspace`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/admin/workspaces`;
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
        "description",
        "defaults",
        "users"
    ]
};
export const flatMap = {};
