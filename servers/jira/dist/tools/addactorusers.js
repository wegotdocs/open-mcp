import { z } from "zod";
export const toolName = `addactorusers`;
export const toolDescription = `Add actors to project role`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/project/{projectIdOrKey}/role/{id}`;
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
        "projectIdOrKey",
        "id"
    ],
    "cookie": [],
    "body": [
        "group",
        "groupId",
        "user"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "projectIdOrKey": z.string().describe("The project ID or project key (case sensitive)."), "id": z.number().int().describe("The ID of the project role. Use [Get all project roles](#api-rest-api-3-role-get) to get a list of project role IDs."), "group": z.array(z.string()).describe("The name of the group to add. This parameter cannot be used with the `groupId` parameter. As a group's name can change, use of `groupId` is recommended.").optional(), "groupId": z.array(z.string()).describe("The ID of the group to add. This parameter cannot be used with the `group` parameter.").optional(), "user": z.array(z.string()).describe("The user account ID of the user to add.").optional() }).shape;
