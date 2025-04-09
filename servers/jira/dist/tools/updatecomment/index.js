export { inputParams } from "./schema/root.js";
export const toolName = `updatecomment`;
export const toolDescription = `Update comment`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issue/{issueIdOrKey}/comment/{id}`;
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
        "overrideEditableFlag",
        "expand"
    ],
    "header": [],
    "path": [
        "issueIdOrKey",
        "id"
    ],
    "cookie": [],
    "body": [
        "author",
        "body",
        "created",
        "b_id",
        "jsdAuthorCanSeeRequest",
        "jsdPublic",
        "properties",
        "renderedBody",
        "self",
        "updateAuthor",
        "updated",
        "visibility"
    ]
};
export const flatMap = {
    "b_id": "id"
};
