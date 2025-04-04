import { z } from "zod";
export const toolName = `getfieldconfigurationschemeprojectmapping`;
export const toolDescription = `Get field configuration schemes for projects`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/fieldconfigurationscheme/project`;
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
        "projectId"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "maxResults": z.number().int().describe("The maximum number of items to return per page."), "projectId": z.array(z.number().int()).describe("The list of project IDs. To include multiple projects, separate IDs with ampersand: `projectId=10000&projectId=10001`.") }).shape;
