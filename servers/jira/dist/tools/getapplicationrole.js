import { z } from "zod";
export const toolName = `getapplicationrole`;
export const toolDescription = `Get application role`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/applicationrole/{key}`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    }
];
export const keys = {
    "query": [],
    "header": [],
    "path": [
        "key"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "key": z.string().describe("The key of the application role. Use the [Get all application roles](#api-rest-api-3-applicationrole-get) operation to get the key for each application role.")
};
