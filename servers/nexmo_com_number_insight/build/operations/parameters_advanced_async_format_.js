import { z } from "zod";
export const toolName = `parameters_advanced_async_format_`;
export const toolDescription = ``;
export const baseUrl = `https://api.nexmo.com/ni`;
export const path = `/advanced/async/{format}`;
export const method = `parameters`;
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
