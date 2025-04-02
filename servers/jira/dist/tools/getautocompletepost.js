import { z } from "zod";
export const toolName = `getautocompletepost`;
export const toolDescription = `Get field reference data (POST)`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/jql/autocompletedata`;
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
        "includeCollapsedFields",
        "projectIds"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "includeCollapsedFields": z.boolean().describe("Include collapsed fields for fields that have non-unique names."), "projectIds": z.array(z.number().int()).describe("List of project IDs used to filter the visible field details returned.").optional() }).shape;
