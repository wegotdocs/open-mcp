import { z } from "zod";
export const toolName = `updaterelatedwork`;
export const toolDescription = `Update related work`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/version/{id}/relatedwork`;
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
        "category",
        "issueId",
        "relatedWorkId",
        "title",
        "url"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "id": z.string().describe("The ID of the version to update the related work on. For the related work id, pass it to the input JSON."), "category": z.string().describe("The category of the related work"), "issueId": z.number().int().describe("The ID of the issue associated with the related work (if there is one). Cannot be updated via the Rest API.").readonly().optional(), "relatedWorkId": z.string().describe("The id of the related work. For the native release note related work item, this will be null, and Rest API does not support updating it.").readonly().optional(), "title": z.string().describe("The title of the related work").optional(), "url": z.string().url().describe("The URL of the related work. Will be null for the native release note related work item, but is otherwise required.").optional() }).shape;
