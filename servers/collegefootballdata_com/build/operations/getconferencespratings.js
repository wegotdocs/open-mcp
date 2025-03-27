import { z } from "zod";
export const toolName = `getconferencespratings`;
export const toolDescription = `Historical SP+ ratings by conference`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/ratings/sp/conferences`;
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
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(1970).describe("Season filter").optional(), "conference": z.string().describe("Conference abbreviation filter").optional() }).optional() }).shape;
