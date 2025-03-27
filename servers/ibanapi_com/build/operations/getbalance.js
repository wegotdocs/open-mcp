import { z } from "zod";
export const toolName = `getbalance`;
export const toolDescription = `Get Account Balance`;
export const baseUrl = `https://api.ibanapi.com/v1`;
export const path = `/balance`;
export const method = `get`;
export const security = [
    {
        "key": "api_key",
        "value": "<mcp-env-var>API_KEY</mcp-env-var>",
        "in": "query",
        "envVarName": "API_KEY",
        "schemeType": "apiKey",
        "schemeName": "api_key"
    }
];
export const inputParams = z.object({}).shape;
