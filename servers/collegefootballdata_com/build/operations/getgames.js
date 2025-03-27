import { z } from "zod";
export const toolName = `getgames`;
export const toolDescription = `Games and results`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/games`;
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
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(1869).describe("Year/season filter for games"), "week": z.number().int().gte(1).lte(16).describe("Week filter").optional(), "seasonType": z.string().describe("Season type filter (regular or postseason)"), "team": z.string().describe("Team").optional(), "home": z.string().describe("Home team filter").optional(), "away": z.string().describe("Away team filter").optional(), "conference": z.string().describe("Conference abbreviation filter").optional(), "division": z.string().describe("Division classification filter (fbs/fcs/ii/iii)").optional(), "id": z.number().int().describe("id filter for querying a single game").optional() }).optional() }).shape;
