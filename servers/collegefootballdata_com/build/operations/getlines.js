import { z } from "zod";
export const toolName = `getlines`;
export const toolDescription = `Betting lines`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/lines`;
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
export const inputParams = z.object({ "query": z.object({ "gameId": z.number().int().describe("Game id filter").optional(), "year": z.number().int().gte(2013).describe("Year/season filter for games").optional(), "week": z.number().int().gte(1).lte(16).describe("Week filter").optional(), "seasonType": z.string().describe("Season type filter (regular or postseason)"), "team": z.string().describe("Team").optional(), "home": z.string().describe("Home team filter").optional(), "away": z.string().describe("Away team filter").optional(), "conference": z.string().describe("Conference abbreviation filter").optional() }).optional() }).shape;
