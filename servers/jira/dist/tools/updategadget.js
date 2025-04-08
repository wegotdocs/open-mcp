import { z } from "zod";
export const toolName = `updategadget`;
export const toolDescription = `Update gadget on dashboard`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/dashboard/{dashboardId}/gadget/{gadgetId}`;
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
        "dashboardId",
        "gadgetId"
    ],
    "cookie": [],
    "body": [
        "color",
        "position",
        "title"
    ]
};
export const flatMap = {};
export const inputParams = {
    "dashboardId": z.number().int().describe("The ID of the dashboard."),
    "gadgetId": z.number().int().describe("The ID of the gadget."),
    "color": z.string().describe("The color of the gadget. Should be one of `blue`, `red`, `yellow`, `green`, `cyan`, `purple`, `gray`, or `white`.").optional(),
    "position": z.string().optional(),
    "title": z.string().describe("The title of the gadget.").optional()
};
