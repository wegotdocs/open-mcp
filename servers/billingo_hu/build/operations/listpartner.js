import { z } from "zod";
export const toolName = `listpartner`;
export const toolDescription = `List all partners`;
export const baseUrl = `https://api.billingo.hu/v3`;
export const path = `/partners`;
export const method = `get`;
export const security = [
    {
        "key": "X-API-KEY",
        "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "X-API-KEY"
    }
];
export const inputParams = z.object({ "query": z.object({ "page": z.number().int(), "per_page": z.number().int().gte(1).lte(100) }).optional() }).shape;
