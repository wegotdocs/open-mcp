import { z } from "zod";
export const toolName = `addnotifications`;
export const toolDescription = `Add notifications to notification scheme`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/notificationscheme/{id}/notification`;
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
        "notificationSchemeEvents"
    ]
};
export const flatMap = {};
export const inputParams = {
    "id": z.string().describe("The ID of the notification scheme."),
    "notificationSchemeEvents": z.array(z.object({ "event": z.string(), "notifications": z.array(z.object({ "notificationType": z.string().describe("The notification type, e.g `CurrentAssignee`, `Group`, `EmailAddress`."), "parameter": z.string().describe("The value corresponding to the specified notification type.").optional() }).catchall(z.any()).describe("Details of a notification within a notification scheme.")).describe("The list of notifications mapped to a specified event.") }).catchall(z.any()).describe("Details of a notification scheme event.")).describe("The list of notifications which should be added to the notification scheme.")
};
