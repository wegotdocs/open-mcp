import { z } from "zod";
export const toolName = `createpriorityscheme`;
export const toolDescription = `Create priority scheme`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/priorityscheme`;
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
        "defaultPriorityId",
        "description",
        "mappings",
        "name",
        "priorityIds",
        "projectIds"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "defaultPriorityId": z.number().int().describe("The ID of the default priority for the priority scheme."), "description": z.string().max(4000).describe("The description of the priority scheme.").optional(), "mappings": z.string().optional(), "name": z.string().max(255).describe("The name of the priority scheme. Must be unique."), "priorityIds": z.array(z.number().int()).describe("The IDs of priorities in the scheme."), "projectIds": z.array(z.number().int()).describe("The IDs of projects that will use the priority scheme.").optional() }).shape;
