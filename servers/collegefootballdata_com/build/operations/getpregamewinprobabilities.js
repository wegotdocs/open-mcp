import { z } from "zod";
export const toolName = `getpregamewinprobabilities`;
export const toolDescription = `Pregame win probability data`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/metrics/wp/pregame`;
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
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2001).describe("Year filter").optional(), "week": z.number().int().gte(1).lte(16).describe("Week filter").optional(), "team": z.string().describe("Team filter").optional(), "seasonType": z.string().describe("regular or postseason").optional() }).optional() }).shape;
