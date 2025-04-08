import { z } from "zod";
export const toolName = `updateprojectcategory`;
export const toolDescription = `Update project category`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/projectCategory/{id}`;
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
        "id"
    ],
    "cookie": [],
    "body": [
        "description",
        "b_id",
        "name",
        "self"
    ]
};
export const flatMap = {
    "b_id": "id"
};
export const inputParams = {
    "id": z.number().int(),
    "description": z.string().describe("The description of the project category.").optional(),
    "b_id": z.string().describe("The ID of the project category.").readonly().optional(),
    "name": z.string().describe("The name of the project category. Required on create, optional on update.").optional(),
    "self": z.string().url().describe("The URL of the project category.").readonly().optional()
};
