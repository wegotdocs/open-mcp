import { z } from "zod";
export const toolName = `listapplication`;
export const toolDescription = `List available applications`;
export const baseUrl = `https://api.nexmo.com/v2/applications`;
export const path = `/`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
        "in": "header",
        "envVarName": "USERNAME_PASSWORD_BASE64",
        "schemeType": "http",
        "schemeScheme": "basic"
    }
];
export const inputParams = z.object({ "query": z.object({ "page_size": z.number().int().describe("The number of applications per page").optional(), "page": z.number().int().describe("The current page number (starts at 1)").optional() }).optional() }).shape;
