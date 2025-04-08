import { z } from "zod";
export const toolName = `createissuetypescreenscheme`;
export const toolDescription = `Create issue type screen scheme`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issuetypescreenscheme`;
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
        "description",
        "issueTypeMappings",
        "name"
    ]
};
export const flatMap = {};
export const inputParams = {
    "description": z.string().describe("The description of the issue type screen scheme. The maximum length is 255 characters.").optional(),
    "issueTypeMappings": z.array(z.object({ "issueTypeId": z.string().describe("The ID of the issue type or *default*. Only issue types used in classic projects are accepted. An entry for *default* must be provided and defines the mapping for all issue types without a screen scheme."), "screenSchemeId": z.string().describe("The ID of the screen scheme. Only screen schemes used in classic projects are accepted.") }).strict().describe("The IDs of the screen schemes for the issue type IDs.")).describe("The IDs of the screen schemes for the issue type IDs and *default*. A *default* entry is required to create an issue type screen scheme, it defines the mapping for all issue types without a screen scheme."),
    "name": z.string().describe("The name of the issue type screen scheme. The name must be unique. The maximum length is 255 characters.")
};
