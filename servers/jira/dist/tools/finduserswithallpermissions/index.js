export { inputParams } from "./schema/root.js";
export const toolName = `finduserswithallpermissions`;
export const toolDescription = `Find users with permissions`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/user/permission/search`;
export const method = `get`;
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
        "query",
        "username",
        "accountId",
        "permissions",
        "issueKey",
        "projectKey",
        "startAt",
        "maxResults"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
