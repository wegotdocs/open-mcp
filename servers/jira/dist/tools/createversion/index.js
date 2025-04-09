export { inputParams } from "./schema/root.js";
export const toolName = `createversion`;
export const toolDescription = `Create version`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/version`;
export const method = `post`;
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
    "path": [],
    "cookie": [],
    "body": [
        "approvers",
        "archived",
        "description",
        "driver",
        "expand",
        "id",
        "issuesStatusForFixVersion",
        "moveUnfixedIssuesTo",
        "name",
        "operations",
        "overdue",
        "project",
        "projectId",
        "releaseDate",
        "released",
        "self",
        "startDate",
        "userReleaseDate",
        "userStartDate"
    ]
};
export const flatMap = {};
