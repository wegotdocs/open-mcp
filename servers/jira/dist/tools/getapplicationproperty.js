import { z } from "zod";
export const toolName = `getapplicationproperty`;
export const toolDescription = `Get application property`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/application-properties`;
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
        "key",
        "permissionLevel",
        "keyFilter"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "key": z.string().describe("The key of the application property.").optional(),
    "permissionLevel": z.string().describe("The permission level of all items being returned in the list.").optional(),
    "keyFilter": z.string().describe("When a `key` isn't provided, this filters the list of results by the application property `key` using a regular expression. For example, using `jira.lf.*` will return all application properties with keys that start with *jira.lf.*.").optional()
};
