import { z } from "zod";
export const toolName = `removeissuetypesfromglobalfieldconfigurationscheme`;
export const toolDescription = `Remove issue types from field configuration scheme`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/fieldconfigurationscheme/{id}/mapping/delete`;
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
    "path": [
        "id"
    ],
    "cookie": [],
    "body": [
        "issueTypeIds"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "id": z.number().int().describe("The ID of the field configuration scheme."), "issueTypeIds": z.array(z.string()).describe("The list of issue type IDs. Must contain unique values not longer than 255 characters and not be empty. Maximum of 100 IDs.") }).shape;
