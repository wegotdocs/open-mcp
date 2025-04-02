import { z } from "zod";
export const toolName = `getcustomfieldcontextsforprojectsandissuetypes`;
export const toolDescription = `Get custom field contexts for projects and issue types`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/field/{fieldId}/context/mapping`;
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
    "query": [
        "startAt",
        "maxResults"
    ],
    "header": [],
    "path": [
        "fieldId"
    ],
    "cookie": [],
    "body": [
        "mappings"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "fieldId": z.string().describe("The ID of the custom field."), "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset)."), "maxResults": z.number().int().describe("The maximum number of items to return per page."), "mappings": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type."), "projectId": z.string().describe("The ID of the project.") }).strict().describe("The project and issue type mapping.")).describe("The project and issue type mappings.") }).shape;
