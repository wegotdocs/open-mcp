import { z } from "zod";
export const toolName = `assignissuetypeschemetoproject`;
export const toolDescription = `Assign issue type scheme to project`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issuetypescheme/project`;
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
        "issueTypeSchemeId",
        "projectId"
    ]
};
export const flatMap = {};
export const inputParams = {
    "issueTypeSchemeId": z.string().describe("The ID of the issue type scheme."),
    "projectId": z.string().describe("The ID of the project.")
};
