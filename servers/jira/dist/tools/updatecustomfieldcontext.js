import { z } from "zod";
export const toolName = `updatecustomfieldcontext`;
export const toolDescription = `Update custom field context`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/field/{fieldId}/context/{contextId}`;
export const method = `put`;
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
        "fieldId",
        "contextId"
    ],
    "cookie": [],
    "body": [
        "description",
        "name"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "fieldId": z.string().describe("The ID of the custom field."), "contextId": z.number().int().describe("The ID of the context."), "description": z.string().describe("The description of the custom field context. The maximum length is 255 characters.").optional(), "name": z.string().describe("The name of the custom field context. The name must be unique. The maximum length is 255 characters.").optional() }).shape;
