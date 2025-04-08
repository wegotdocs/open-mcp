import { z } from "zod";
export const toolName = `replacecustomfieldoption`;
export const toolDescription = `Replace custom field options`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/field/{fieldId}/context/{contextId}/option/{optionId}/issue`;
export const method = `delete`;
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
        "replaceWith",
        "jql"
    ],
    "header": [],
    "path": [
        "fieldId",
        "optionId",
        "contextId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "fieldId": z.string().describe("The ID of the custom field."),
    "optionId": z.number().int().describe("The ID of the option to be deselected."),
    "contextId": z.number().int().describe("The ID of the context."),
    "replaceWith": z.number().int().describe("The ID of the option that will replace the currently selected option.").optional(),
    "jql": z.string().describe("A JQL query that specifies the issues to be updated. For example, *project=10000*.").optional()
};
