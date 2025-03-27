import { z } from "zod";
export const toolName = `getplayerseasonppa`;
export const toolDescription = `Player Predicated Points Added (PPA/EPA) broken down by season`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/ppa/players/season`;
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
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2013).describe("Year filter").optional(), "team": z.string().describe("Team filter").optional(), "conference": z.string().describe("Conference abbreviation filter").optional(), "position": z.string().describe("Position abbreviation filter").optional(), "playerId": z.number().int().describe("Player id filter").optional(), "threshold": z.string().describe("Minimum play threshold filter").optional(), "excludeGarbageTime": z.boolean().describe("Filter to remove garbage time plays from calculations").optional() }).optional() }).shape;
