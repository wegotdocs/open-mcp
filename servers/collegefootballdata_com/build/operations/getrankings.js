import { z } from "zod";
export const toolName = `getrankings`;
export const toolDescription = `Historical polls and rankings`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/rankings`;
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
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(1936).describe("Year/season filter for games"), "week": z.number().int().gte(1).lte(16).describe("Week filter").optional(), "seasonType": z.string().describe("Season type filter (regular or postseason)") }).optional() }).shape;
