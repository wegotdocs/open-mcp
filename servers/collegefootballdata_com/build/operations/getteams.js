import { z } from "zod";
export const toolName = `getteams`;
export const toolDescription = `Team information`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/teams`;
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
export const inputParams = z.object({ "query": z.object({ "conference": z.string().describe("Conference abbreviation filter").optional() }).optional() }).shape;
