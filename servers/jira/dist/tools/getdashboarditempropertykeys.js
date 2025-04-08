import { z } from "zod";
export const toolName = `getdashboarditempropertykeys`;
export const toolDescription = `Get dashboard item property keys`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/dashboard/{dashboardId}/items/{itemId}/properties`;
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
    "query": [],
    "header": [],
    "path": [
        "dashboardId",
        "itemId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = {
    "dashboardId": z.string().describe("The ID of the dashboard."),
    "itemId": z.string().describe("The ID of the dashboard item.")
};
