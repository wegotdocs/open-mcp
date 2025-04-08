import { z } from "zod";
export const toolName = `canceltask`;
export const toolDescription = `Cancel task`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/task/{taskId}/cancel`;
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
    "path": [
        "taskId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "taskId": z.string().describe("The ID of the task.")
};
