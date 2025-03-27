import { z } from "zod";
export const toolName = `getvenues`;
export const toolDescription = `Arena and venue information`;
export const baseUrl = `https://api.collegefootballdata.com`;
export const path = `/venues`;
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
