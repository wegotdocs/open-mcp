import { z } from "zod";
export const toolName = `getcoaches`;
export const toolDescription = `Coaching records and history`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/coaches`;
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
export const inputParams = z.object({ "query": z.object({ "firstName": z.string().describe("First name filter").optional(), "lastName": z.string().describe("Last name filter").optional(), "team": z.string().describe("Team name filter").optional(), "year": z.number().int().gte(1869).describe("Year filter").optional(), "minYear": z.number().int().gte(1869).describe("Minimum year filter (inclusive)").optional(), "maxYear": z.number().int().gte(1869).describe("Maximum year filter (inclusive)").optional() }).optional() }).shape;
