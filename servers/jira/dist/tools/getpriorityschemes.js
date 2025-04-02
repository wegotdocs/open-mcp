import { z } from "zod";
export const toolName = `getpriorityschemes`;
export const toolDescription = `Get priority schemes`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/priorityscheme`;
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
        "startAt",
        "maxResults",
        "priorityId",
        "schemeId",
        "schemeName",
        "onlyDefault",
        "orderBy",
        "expand"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "startAt": z.string().describe("The index of the first item to return in a page of results (page offset)."), "maxResults": z.string().describe("The maximum number of items to return per page."), "priorityId": z.array(z.number().int()).describe("A set of priority IDs to filter by. To include multiple IDs, provide an ampersand-separated list. For example, `priorityId=10000&priorityId=10001`.").optional(), "schemeId": z.array(z.number().int()).describe("A set of priority scheme IDs. To include multiple IDs, provide an ampersand-separated list. For example, `schemeId=10000&schemeId=10001`.").optional(), "schemeName": z.string().describe("The name of scheme to search for."), "onlyDefault": z.boolean().describe("Whether only the default priority is returned."), "orderBy": z.enum(["name", "+name", "-name"]).describe("The ordering to return the priority schemes by."), "expand": z.string().describe("A comma separated list of additional information to return. \"priorities\" will return priorities associated with the priority scheme. \"projects\" will return projects associated with the priority scheme. `expand=priorities,projects`.").optional() }).shape;
