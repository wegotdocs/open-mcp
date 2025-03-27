import { z } from "zod";
export const toolName = `getplayergameppa`;
export const toolDescription = `Player Predicated Points Added (PPA/EPA) broken down by game`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/ppa/players/games`;
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
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2013).describe("Year filter").optional(), "week": z.number().int().gte(1).lte(16).describe("Week filter").optional(), "team": z.string().describe("Team filter").optional(), "position": z.string().describe("Position abbreviation filter").optional(), "playerId": z.number().int().describe("Player id filter").optional(), "threshold": z.string().describe("Minimum play threshold filter").optional(), "excludeGarbageTime": z.boolean().describe("Filter to remove garbage time plays from calculations").optional(), "seasonType": z.string().describe("Season type filter (regular or postseason)") }).optional() }).shape;
