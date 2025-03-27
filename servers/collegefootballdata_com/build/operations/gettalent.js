import { z } from "zod";
export const toolName = `gettalent`;
export const toolDescription = `Team talent composite rankings`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/talent`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
        "in": "header",
        "envVarName": "AUTHORIZATION",
        "schemeType": "apiKey",
        "schemeName": "Authorization"
    }
];
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2015).describe("Year filter").optional() }).optional() }).shape;
