import { z } from "zod";
export const toolName = `createprojectcategory`;
export const toolDescription = `Create project category`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/projectCategory`;
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
        "description",
        "id",
        "name",
        "self"
    ]
};
export const flatMap = {};
export const inputParams = {
    "description": z.string().describe("The description of the project category.").optional(),
    "id": z.string().describe("The ID of the project category.").readonly().optional(),
    "name": z.string().describe("The name of the project category. Required on create, optional on update.").optional(),
    "self": z.string().url().describe("The URL of the project category.").readonly().optional()
};
