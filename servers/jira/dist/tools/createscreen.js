import { z } from "zod";
export const toolName = `createscreen`;
export const toolDescription = `Create screen`;
export const baseUrl = `https://your-domain.atlassian.net`;
export const path = `/rest/api/3/screens`;
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
    "path": [],
    "cookie": [],
    "body": [
        "description",
        "name"
    ]
};
export const flatMap = {};
export const inputParams = z.object({ "description": z.string().describe("The description of the screen. The maximum length is 255 characters.").optional(), "name": z.string().describe("The name of the screen. The name must be unique. The maximum length is 255 characters.") }).shape;
