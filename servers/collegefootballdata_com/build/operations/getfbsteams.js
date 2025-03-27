import { z } from "zod";
export const toolName = `getfbsteams`;
export const toolDescription = `FBS team list`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/teams/fbs`;
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
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(1869).describe("Year filter").optional() }).optional() }).shape;
