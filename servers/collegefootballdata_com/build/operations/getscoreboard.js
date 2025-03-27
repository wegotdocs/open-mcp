import { z } from "zod";
export const toolName = `getscoreboard`;
export const toolDescription = `Live game results (Patreon only)`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/scoreboard`;
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
export const inputParams = z.object({ "query": z.object({ "classification": z.string().describe("Classification filter (fbs, fcs, ii, or iii). Defaults to fbs.").optional(), "conference": z.string().describe("Conference abbreviation filter.").optional() }).optional() }).shape;
