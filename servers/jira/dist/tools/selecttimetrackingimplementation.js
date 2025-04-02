import { z } from "zod";
export const toolName = `selecttimetrackingimplementation`;
export const toolDescription = `Select time tracking provider`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/configuration/timetracking`;
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
        "key",
        "name",
        "url"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "key": z.string().describe("The key for the time tracking provider. For example, *JIRA*."), "name": z.string().describe("The name of the time tracking provider. For example, *JIRA provided time tracking*.").optional(), "url": z.string().describe("The URL of the configuration page for the time tracking provider app. For example, */example/config/url*. This property is only returned if the `adminPageKey` property is set in the module descriptor of the time tracking provider app.").readonly().optional() }).shape;
