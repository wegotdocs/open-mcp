import { z } from "zod";
export const toolName = `getallgadgets`;
export const toolDescription = `Get gadgets`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/dashboard/{dashboardId}/gadget`;
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
        "moduleKey",
        "uri",
        "gadgetId"
    ],
    "header": [],
    "path": [
        "dashboardId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "dashboardId": z.number().int().describe("The ID of the dashboard."), "moduleKey": z.array(z.string()).describe("The list of gadgets module keys. To include multiple module keys, separate module keys with ampersand: `moduleKey=key:one&moduleKey=key:two`.").optional(), "uri": z.array(z.string()).describe("The list of gadgets URIs. To include multiple URIs, separate URIs with ampersand: `uri=/rest/example/uri/1&uri=/rest/example/uri/2`.").optional(), "gadgetId": z.array(z.number().int()).describe("The list of gadgets IDs. To include multiple IDs, separate IDs with ampersand: `gadgetId=10000&gadgetId=10001`.").optional() }).shape;
