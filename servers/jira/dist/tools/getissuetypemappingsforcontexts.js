import { z } from "zod";
export const toolName = `getissuetypemappingsforcontexts`;
export const toolDescription = `Get issue types for custom field context`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/field/{fieldId}/context/issuetypemapping`;
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
        "contextId",
        "startAt",
        "maxResults"
    ],
    "header": [],
    "path": [
        "fieldId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "fieldId": z.string().describe("The ID of the custom field."),
    "contextId": z.array(z.number().int()).describe("The ID of the context. To include multiple contexts, provide an ampersand-separated list. For example, `contextId=10001&contextId=10002`.").optional(),
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
};
