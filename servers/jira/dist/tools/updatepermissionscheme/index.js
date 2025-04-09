export { inputParams } from "./schema/root.js";
export const toolName = `updatepermissionscheme`;
export const toolDescription = `Update permission scheme`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/permissionscheme/{schemeId}`;
export const method = `put`;
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
    "query": [
        "expand"
    ],
    "header": [],
    "path": [
        "schemeId"
    ],
    "cookie": [],
    "body": [
        "description",
        "b_expand",
        "id",
        "name",
        "permissions",
        "scope",
        "self"
    ]
};
export const flatMap = {
    "b_expand": "expand"
};
