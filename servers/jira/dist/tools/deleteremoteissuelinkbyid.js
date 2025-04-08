import { z } from "zod";
export const toolName = `deleteremoteissuelinkbyid`;
export const toolDescription = `Delete remote issue link by ID`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issue/{issueIdOrKey}/remotelink/{linkId}`;
export const method = `delete`;
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
        "issueIdOrKey",
        "linkId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "issueIdOrKey": z.string().describe("The ID or key of the issue."),
    "linkId": z.string().describe("The ID of a remote issue link.")
};
