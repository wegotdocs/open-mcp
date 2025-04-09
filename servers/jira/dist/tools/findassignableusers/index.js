export { inputParams } from "./schema/root.js";
export const toolName = `findassignableusers`;
export const toolDescription = `Find users assignable to issues`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/user/assignable/search`;
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
        "sessionId",
        "username",
        "accountId",
        "project",
        "issueKey",
        "issueId",
        "startAt",
        "maxResults",
        "actionDescriptorId",
        "recommend"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
