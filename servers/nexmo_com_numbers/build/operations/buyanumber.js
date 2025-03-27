import { z } from "zod";
export const toolName = `buyanumber`;
export const toolDescription = `Buy a number`;
export const baseUrl = `https://rest.nexmo.com`;
export const path = `/number/buy`;
export const method = `post`;
export const security = [
    {
        "key": "api_key",
        "value": "<mcp-env-var>API_KEY</mcp-env-var>",
        "in": "query",
        "envVarName": "API_KEY",
        "schemeType": "apiKey",
        "schemeName": "api_key"
    },
    {
        "key": "api_secret",
        "value": "<mcp-env-var>API_SECRET</mcp-env-var>",
        "in": "query",
        "envVarName": "API_SECRET",
        "schemeType": "apiKey",
        "schemeName": "api_secret"
    }
];
export const inputParams = z.object({}).shape;
