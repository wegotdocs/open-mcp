import { z } from "zod";
export const toolName = `getgameppa`;
export const toolDescription = `Team Predicated Points Added (PPA/EPA) by game`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/ppa/games`;
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
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2001).describe("Year filter"), "week": z.number().int().gte(1).lte(16).describe("Week filter").optional(), "team": z.string().describe("Team filter").optional(), "conference": z.string().describe("Conference filter").optional(), "excludeGarbageTime": z.boolean().describe("Filter to remove garbage time plays from calculations").optional(), "seasonType": z.string().describe("Season type filter (regular or postseason)") }).optional() }).shape;
