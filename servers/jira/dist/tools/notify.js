import { z } from "zod";
export const toolName = `notify`;
export const toolDescription = `Send notification for issue`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issue/{issueIdOrKey}/notify`;
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
        "issueIdOrKey"
    ],
    "cookie": [],
    "body": [
        "htmlBody",
        "restrict",
        "subject",
        "textBody",
        "to"
    ]
};
export const flatMap = {};
export const inputParams = {
    "issueIdOrKey": z.string().describe("ID or key of the issue that the notification is sent for."),
    "htmlBody": z.string().describe("The HTML body of the email notification for the issue.").optional(),
    "restrict": z.string().optional(),
    "subject": z.string().describe("The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary.").optional(),
    "textBody": z.string().describe("The plain text body of the email notification for the issue.").optional(),
    "to": z.string().optional()
};
