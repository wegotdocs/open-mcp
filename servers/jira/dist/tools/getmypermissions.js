import { z } from "zod";
export const toolName = `getmypermissions`;
export const toolDescription = `Get my permissions`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/mypermissions`;
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
        "projectKey",
        "projectId",
        "issueKey",
        "issueId",
        "permissions",
        "projectUuid",
        "projectConfigurationUuid",
        "commentId"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "projectKey": z.string().describe("The key of project. Ignored if `projectId` is provided.").optional(), "projectId": z.string().describe("The ID of project.").optional(), "issueKey": z.string().describe("The key of the issue. Ignored if `issueId` is provided.").optional(), "issueId": z.string().describe("The ID of the issue.").optional(), "permissions": z.string().describe("A list of permission keys. (Required) This parameter accepts a comma-separated list. To get the list of available permissions, use [Get all permissions](#api-rest-api-3-permissions-get).").optional(), "projectUuid": z.string().optional(), "projectConfigurationUuid": z.string().optional(), "commentId": z.string().describe("The ID of the comment.").optional() }).shape;
