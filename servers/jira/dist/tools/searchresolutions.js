import { z } from "zod";
export const toolName = `searchresolutions`;
export const toolDescription = `Search resolutions`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/resolution/search`;
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
        "id",
        "onlyDefault"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "startAt": z.string().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.string().describe("The maximum number of items to return per page.").optional(),
    "id": z.array(z.string()).describe("The list of resolutions IDs to be filtered out").optional(),
    "onlyDefault": z.boolean().describe("When set to true, return default only, when IDs provided, if none of them is default, return empty page. Default value is false").optional()
};
