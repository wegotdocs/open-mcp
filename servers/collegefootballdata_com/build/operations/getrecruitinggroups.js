import { z } from "zod";
export const toolName = `getrecruitinggroups`;
export const toolDescription = `Recruit position group ratings`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/recruiting/groups`;
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
export const inputParams = z.object({ "query": z.object({ "startYear": z.number().int().gte(2000).describe("Starting year").optional(), "endYear": z.number().int().gte(2000).describe("Ending year").optional(), "team": z.string().describe("Team filter").optional(), "conference": z.string().describe("conference filter").optional() }).optional() }).shape;
