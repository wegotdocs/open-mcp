import { z } from "zod";
export const toolName = `getissuetypesforproject`;
export const toolDescription = `Get issue types for project`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issuetype/project`;
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
        "projectId",
        "level"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "projectId": z.number().int().describe("The ID of the project."), "level": z.number().int().describe("The level of the issue type to filter by. Use:\n\n *  `-1` for Subtask.\n *  `0` for Base.\n *  `1` for Epic.").optional() }).shape;
