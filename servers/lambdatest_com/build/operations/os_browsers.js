import { z } from "zod";
export const toolName = `os_browsers`;
export const toolDescription = `Fetch all available os-browser combinations.`;
export const baseUrl = `https://api.lambdatest.com/screenshots/v1`;
export const path = `/os-browsers`;
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
export const inputParams = z.object({ "query": z.object({ "os": z.string().describe("Fetch details for a particular OS").optional() }).optional() }).shape;
