import { z } from "zod";
export const toolName = `getdraftpicks`;
export const toolDescription = `List of NFL Draft picks`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/draft/picks`;
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
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().describe("Year filter").optional(), "nflTeam": z.string().describe("NFL team filter").optional(), "college": z.string().describe("Player college filter").optional(), "conference": z.string().describe("College confrence abbreviation filter").optional(), "position": z.string().describe("NFL position filter").optional() }).optional() }).shape;
