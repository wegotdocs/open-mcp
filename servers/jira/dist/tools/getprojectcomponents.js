import { z } from "zod";
export const toolName = `getprojectcomponents`;
export const toolDescription = `Get project components`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/project/{projectIdOrKey}/components`;
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
        "componentSource"
    ],
    "header": [],
    "path": [
        "projectIdOrKey"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."),
    "componentSource": z.enum(["jira", "compass", "auto"]).describe("The source of the components to return. Can be `jira` (default), `compass` or `auto`. When `auto` is specified, the API will return connected Compass components if the project is opted into Compass, otherwise it will return Jira components. Defaults to `jira`.").optional()
};
