import { z } from "zod";
export const toolName = `getplays`;
export const toolDescription = `Play by play data`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/plays`;
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
export const inputParams = z.object({ "query": z.object({ "seasonType": z.string().describe("Season type filter"), "year": z.number().int().gte(2001).describe("Year filter"), "week": z.number().int().gte(1).lte(16).describe("Week filter (required if team, offense, or defense, not specified)"), "team": z.string().describe("Team filter").optional(), "offense": z.string().describe("Offensive team filter").optional(), "defense": z.string().describe("Defensive team filter").optional(), "conference": z.string().describe("Conference filter").optional(), "offenseConference": z.string().describe("Offensive conference filter").optional(), "defenseConference": z.string().describe("Defensive conference filter").optional(), "playType": z.number().int().describe("Play type filter").optional(), "classification": z.string().describe("Division classification filter (fbs/fcs/ii/iii)").optional() }).optional() }).shape;
