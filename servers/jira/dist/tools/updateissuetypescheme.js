import { z } from "zod";
export const toolName = `updateissuetypescheme`;
export const toolDescription = `Update issue type scheme`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issuetypescheme/{issueTypeSchemeId}`;
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
        "issueTypeSchemeId"
    ],
    "cookie": [],
    "body": [
        "defaultIssueTypeId",
        "description",
        "name"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "issueTypeSchemeId": z.number().int().describe("The ID of the issue type scheme."), "defaultIssueTypeId": z.string().describe("The ID of the default issue type of the issue type scheme.").optional(), "description": z.string().describe("The description of the issue type scheme. The maximum length is 4000 characters.").optional(), "name": z.string().describe("The name of the issue type scheme. The name must be unique. The maximum length is 255 characters.").optional() }).shape;
