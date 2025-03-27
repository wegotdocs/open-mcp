import { z } from "zod";
export const toolName = `deletebankaccount`;
export const toolDescription = `Delete a bank account`;
export const baseUrl = `https://api.billingo.hu/v3`;
export const path = `/bank-accounts/{id}`;
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
