import { z } from "zod";
export const toolName = `gethealth`;
export const toolDescription = `Service health`;
export const baseUrl = `https://positioning.hereapi.com/v2`;
export const path = `/health`;
export const method = `get`;
export const security = [
    {
        "key": "apiKey",
        "value": "<mcp-env-var>APIKEY</mcp-env-var>",
        "in": "query",
        "envVarName": "APIKEY",
        "schemeType": "apiKey",
        "schemeName": "apiKey"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const inputParams = z.object({}).shape;
