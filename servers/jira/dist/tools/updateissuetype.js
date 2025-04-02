import { z } from "zod";
export const toolName = `updateissuetype`;
export const toolDescription = `Update issue type`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issuetype/{id}`;
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
        "avatarId",
        "description",
        "name"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "id": z.string().describe("The ID of the issue type."), "avatarId": z.number().int().describe("The ID of an issue type avatar.").optional(), "description": z.string().describe("The description of the issue type.").optional(), "name": z.string().describe("The unique name for the issue type. The maximum length is 60 characters.").optional() }).shape;
