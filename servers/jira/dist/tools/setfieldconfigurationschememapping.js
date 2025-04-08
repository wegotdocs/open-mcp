import { z } from "zod";
export const toolName = `setfieldconfigurationschememapping`;
export const toolDescription = `Assign issue types to field configurations`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/fieldconfigurationscheme/{id}/mapping`;
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
        "id"
    ],
    "cookie": [],
    "body": [
        "mappings"
    ]
};
export const flatMap = {};
export const inputParams = {
    "id": z.number().int().describe("The ID of the field configuration scheme."),
    "mappings": z.array(z.object({ "fieldConfigurationId": z.string().describe("The ID of the field configuration."), "issueTypeId": z.string().describe("The ID of the issue type or *default*. When set to *default* this field configuration issue type item applies to all issue types without a field configuration. An issue type can be included only once in a request.") }).strict().describe("The field configuration to issue type mapping.")).describe("Field configuration to issue type mappings.")
};
