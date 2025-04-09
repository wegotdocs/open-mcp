export { inputParams } from "./schema/root.js";
export const toolName = `delete_admin_users_invites_inviteid_`;
export const toolDescription = `Delete Invite By ID`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/admin/users/invites/{inviteId}`;
export const method = `delete`;
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
        "inviteId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
