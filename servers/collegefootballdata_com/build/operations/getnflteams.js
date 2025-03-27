import { z } from "zod";
export const toolName = `getnflteams`;
export const toolDescription = `List of NFL teams`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/draft/teams`;
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
export const inputParams = z.object({}).shape;
