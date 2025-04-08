import { z } from "zod";
export const toolName = `getalldashboards`;
export const toolDescription = `Get all dashboards`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/dashboard`;
export const method = `get`;
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
    "query": [
        "filter",
        "startAt",
        "maxResults"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "filter": z.enum(["my", "favourite"]).describe("The filter applied to the list of dashboards. Valid values are:\n\n *  `favourite` Returns dashboards the user has marked as favorite.\n *  `my` Returns dashboards owned by the user.").optional(),
    "startAt": z.number().int().describe("The index of the first item to return in a page of results (page offset).").optional(),
    "maxResults": z.number().int().describe("The maximum number of items to return per page.").optional()
};
