import { z } from "zod";
export const toolName = `put_admin_workspaces_workspaceid_`;
export const toolDescription = `Update Workspace`;
export const baseUrl = `https://api.portkey.ai/v1`;
export const path = `/admin/workspaces/{workspaceId}`;
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
        "workspaceId"
    ],
    "cookie": [],
    "body": [
        "name",
        "description",
        "defaults"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "workspaceId": z.string(), "name": z.string().optional(), "description": z.string().optional(), "defaults": z.object({ "metadata": z.record(z.string()).optional() }).optional() }).shape;
