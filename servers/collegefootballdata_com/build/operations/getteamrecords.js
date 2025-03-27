import { z } from "zod";
export const toolName = `getteamrecords`;
export const toolDescription = `Team records`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/records`;
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
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(1869).describe("Year filter").optional(), "team": z.string().describe("Team filter").optional(), "conference": z.string().describe("Conference filter").optional() }).optional() }).shape;
