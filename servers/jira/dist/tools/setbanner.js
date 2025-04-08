import { z } from "zod";
export const toolName = `setbanner`;
export const toolDescription = `Update announcement banner configuration`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/announcementBanner`;
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
        "isDismissible",
        "isEnabled",
        "message",
        "visibility"
    ]
};
export const flatMap = {};
export const inputParams = {
    "isDismissible": z.boolean().describe("Flag indicating if the announcement banner can be dismissed by the user.").optional(),
    "isEnabled": z.boolean().describe("Flag indicating if the announcement banner is enabled or not.").optional(),
    "message": z.string().describe("The text on the announcement banner.").optional(),
    "visibility": z.string().describe("Visibility of the announcement banner. Can be public or private.").optional()
};
