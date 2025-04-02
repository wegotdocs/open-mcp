import { z } from "zod";
export const toolName = `assignissuetypescreenschemetoproject`;
export const toolDescription = `Assign issue type screen scheme to project`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issuetypescreenscheme/project`;
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
        "issueTypeScreenSchemeId",
        "projectId"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "issueTypeScreenSchemeId": z.string().describe("The ID of the issue type screen scheme.").optional(), "projectId": z.string().describe("The ID of the project.").optional() }).shape;
