import { z } from "zod";
export const toolName = `retrieveapisecrets`;
export const toolDescription = `Retrieve API Secrets`;
export const baseUrl = `https://api.nexmo.com`;
export const path = `/accounts/{api_key}/secrets`;
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
export const inputParams = z.object({ "path": z.object({ "api_key": z.string().describe("The API key to manage secrets for") }).optional() }).shape;
