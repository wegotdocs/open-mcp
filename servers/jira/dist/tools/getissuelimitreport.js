import { z } from "zod";
export const toolName = `getissuelimitreport`;
export const toolDescription = `Get issue limit report`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/issue/limit/report`;
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
        "isReturningKeys"
    ],
    "header": [],
    "path": [],
    "cookie": [],
    "body": []
};
export const flatMap = {};
export const inputParams = z.object({ "isReturningKeys": z.boolean().describe("Return issue keys instead of issue ids in the response.\n\nUsage: Add `?isReturningKeys=true` to the end of the path to request issue keys.") }).shape;
