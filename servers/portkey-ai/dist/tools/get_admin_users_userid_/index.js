export { inputParams } from "./schema/root.js";
export const toolName = `get_admin_users_userid_`;
export const toolDescription = `Get user`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/admin/users/{userId}`;
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
    "query": [],
    "header": [],
    "path": [
        "userId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
