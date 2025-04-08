import { z } from "zod";
export const toolName = `assignfieldconfigurationschemetoproject`;
export const toolDescription = `Assign field configuration scheme to project`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/fieldconfigurationscheme/project`;
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
    "path": [],
    "cookie": [],
    "body": [
        "fieldConfigurationSchemeId",
        "projectId"
    ]
};
export const flatMap = {};
export const inputParams = {
    "fieldConfigurationSchemeId": z.string().describe("The ID of the field configuration scheme. If the field configuration scheme ID is `null`, the operation assigns the default field configuration scheme.").optional(),
    "projectId": z.string().describe("The ID of the project.")
};
