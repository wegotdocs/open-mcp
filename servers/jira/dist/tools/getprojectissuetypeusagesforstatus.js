import { z } from "zod";
export const toolName = `getprojectissuetypeusagesforstatus`;
export const toolDescription = `Get issue type usages by status and project`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/statuses/{statusId}/project/{projectId}/issueTypeUsages`;
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
        "nextPageToken",
        "maxResults"
    ],
    "header": [],
    "path": [
        "statusId",
        "projectId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "statusId": z.string().describe("The statusId to fetch issue type usages for"), "projectId": z.string().describe("The projectId to fetch issue type usages for"), "nextPageToken": z.string().describe("The cursor for pagination").optional(), "maxResults": z.number().int().describe("The maximum number of results to return. Must be an integer between 1 and 200.") }).shape;
