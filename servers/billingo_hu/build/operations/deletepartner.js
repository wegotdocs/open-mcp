import { z } from "zod";
export const toolName = `deletepartner`;
export const toolDescription = `Delete a partner`;
export const baseUrl = `https://api.billingo.hu/v3`;
export const path = `/partners/{id}`;
export const method = `delete`;
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
export const inputParams = z.object({ "path": z.object({ "id": z.number().int() }).optional() }).shape;
