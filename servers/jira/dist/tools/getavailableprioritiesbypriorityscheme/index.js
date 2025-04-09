export { inputParams } from "./schema/root.js";
export const toolName = `getavailableprioritiesbypriorityscheme`;
export const toolDescription = `Get available priorities by priority scheme`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/priorityscheme/priorities/available`;
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
        "startAt",
        "maxResults",
        "query",
        "schemeId",
        "exclude"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
