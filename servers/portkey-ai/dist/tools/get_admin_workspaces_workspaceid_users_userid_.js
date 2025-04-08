import { z } from "zod";
export const toolName = `get_admin_workspaces_workspaceid_users_userid_`;
export const toolDescription = `Get member`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/admin/workspaces/{workspaceId}/users/{userId}`;
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
        "workspaceId",
        "userId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "workspaceId": z.string(),
    "userId": z.string()
};
