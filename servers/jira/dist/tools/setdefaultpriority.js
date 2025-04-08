import { z } from "zod";
export const toolName = `setdefaultpriority`;
export const toolDescription = `Set default priority`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/priority/default`;
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
    "query": [],
    "header": [],
    "path": [],
    "cookie": [],
    "body": [
        "id"
    ]
};
export const flatMap = {};
export const inputParams = {
    "id": z.string().describe("The ID of the new default issue priority. Must be an existing ID or null. Setting this to null erases the default priority setting.")
};
