import { z } from "zod";
export const toolName = `getsrsratings`;
export const toolDescription = `Historical SRS ratings`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/ratings/srs`;
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
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(1897).describe("Season filter (required if team not specified)").optional(), "team": z.string().describe("Team filter (required if year not specified)").optional(), "conference": z.string().describe("Conference filter").optional() }).optional() }).shape;
