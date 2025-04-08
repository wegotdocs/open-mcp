import { z } from "zod";
export const toolName = `deletepermissionschemeentity`;
export const toolDescription = `Delete permission scheme grant`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/permissionscheme/{schemeId}/permission/{permissionId}`;
export const method = `delete`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "schemeId",
        "permissionId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "schemeId": z.number().int().describe("The ID of the permission scheme to delete the permission grant from."),
    "permissionId": z.number().int().describe("The ID of the permission grant to delete.")
};
