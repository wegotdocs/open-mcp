import { z } from "zod";
export const toolName = `getbulkeditablefields`;
export const toolDescription = `Get bulk editable fields`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/bulk/issues/fields`;
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
        "issueIdsOrKeys",
        "searchText",
        "endingBefore",
        "startingAfter"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "issueIdsOrKeys": z.string().describe("The IDs or keys of the issues to get editable fields from."),
    "searchText": z.string().describe("(Optional)The text to search for in the editable fields.").optional(),
    "endingBefore": z.string().describe("(Optional)The end cursor for use in pagination.").optional(),
    "startingAfter": z.string().describe("(Optional)The start cursor for use in pagination.").optional()
};
