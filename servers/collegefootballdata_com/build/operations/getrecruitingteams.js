import { z } from "zod";
export const toolName = `getrecruitingteams`;
export const toolDescription = `Team recruiting rankings and ratings`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/recruiting/teams`;
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
export const inputParams = z.object({ "query": z.object({ "year": z.number().int().gte(2000).describe("Recruiting class year").optional(), "team": z.string().describe("Team filter").optional() }).optional() }).shape;
