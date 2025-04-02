import { z } from "zod";
export const toolName = `deletescreentab`;
export const toolDescription = `Delete screen tab`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/screens/{screenId}/tabs/{tabId}`;
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
        "screenId",
        "tabId"
    ],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "screenId": z.number().int().describe("The ID of the screen."), "tabId": z.number().int().describe("The ID of the screen tab.") }).shape;
