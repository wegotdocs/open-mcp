export { inputParams } from "./schema/root.js";
export const toolName = `editissue`;
export const toolDescription = `Edit issue`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issue/{issueIdOrKey}`;
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
        "notifyUsers",
        "overrideScreenSecurity",
        "overrideEditableFlag",
        "returnIssue",
        "expand"
    ],
    "header": [],
    "path": [
        "issueIdOrKey"
    ],
    "cookie": [],
    "body": [
        "fields",
        "historyMetadata",
        "properties",
        "transition",
        "update"
    ]
};
export const flatMap = {};
