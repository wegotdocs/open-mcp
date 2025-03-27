import { z } from "zod";
export const toolName = `getadvancedteamseasonstats`;
export const toolDescription = `Advanced team metrics by season`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/stats/season/advanced`;
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
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2001).describe("Year filter (required if no team specified)").optional(), "team": z.string().describe("Team filter (required if no year specified)").optional(), "excludeGarbageTime": z.boolean().describe("Filter to remove garbage time plays from calculations").optional(), "startWeek": z.number().int().gte(1).lte(16).describe("Starting week filter").optional(), "endWeek": z.number().int().gte(1).lte(16).describe("Starting week filter").optional() }).optional() }).shape;
