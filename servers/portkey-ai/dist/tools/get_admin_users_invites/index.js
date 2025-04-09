export { inputParams } from "./schema/root.js";
export const toolName = `get_admin_users_invites`;
export const toolDescription = `Get All Invites`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/admin/users/invites`;
export const method = `get`;
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
    "query": [
        "pageSize",
        "currentPage",
        "role",
        "email",
        "status"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
