import { z } from "zod";
export const toolName = `getgameweather`;
export const toolDescription = `Game weather information (Patreon only)`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/games/weather`;
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
export const inputParams = z.object({ "query": z.object({ "gameId": z.number().int().describe("Game id filter (required if no year)").optional(), "year": z.number().int().gte(2001).describe("Year filter (required if no game id)").optional(), "week": z.number().int().gte(1).lte(16).describe("Week filter").optional(), "seasonType": z.string().describe("Season type filter (regular, postseason, or both)").optional(), "team": z.string().describe("Team filter").optional(), "conference": z.string().describe("Conference filter").optional(), "classification": z.string().describe("Division classification filter (fbs/fcs/ii/iii)").optional() }).optional() }).shape;
