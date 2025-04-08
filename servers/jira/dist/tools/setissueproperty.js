import { z } from "zod";
export const toolName = `setissueproperty`;
export const toolDescription = `Set issue property`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issue/{issueIdOrKey}/properties/{propertyKey}`;
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
    "path": [
        "issueIdOrKey",
        "propertyKey"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "issueIdOrKey": z.string().describe("The ID or key of the issue."),
    "propertyKey": z.string().describe("The key of the issue property. The maximum length is 255 characters.")
};
