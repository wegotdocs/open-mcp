import { z } from "zod";
export const toolName = `updatecustomfieldconfiguration`;
export const toolDescription = `Update custom field configurations`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/app/field/{fieldIdOrKey}/context/configuration`;
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
        "fieldIdOrKey"
    ],
    "cookie": [],
    "body": [
        "configurations"
    ]
};
export const flatMap = {};
export const inputParams = {
    "fieldIdOrKey": z.string().describe("The ID or key of the custom field, for example `customfield_10000`."),
    "configurations": z.array(z.object({ "configuration": z.any().describe("The field configuration.").optional(), "fieldContextId": z.string().describe("The ID of the field context the configuration is associated with.").readonly(), "id": z.string().describe("The ID of the configuration."), "schema": z.any().describe("The field value schema.").optional() }).strict().describe("Details of the contextual configuration for a custom field.")).min(1).max(1000).describe("The list of custom field configuration details.")
};
