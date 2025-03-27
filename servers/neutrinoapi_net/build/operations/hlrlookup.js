import { z } from "zod";
export const toolName = `hlrlookup`;
export const toolDescription = `HLR Lookup`;
export const baseUrl = `https://neutrinoapi.net`;
export const path = `/hlr-lookup`;
export const method = `get`;
export const security = [
    {
        "key": "api-key",
        "value": "<mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "apiKey",
        "schemeName": "api-key"
    },
    {
        "key": "user-id",
        "value": "<mcp-env-var>USER_ID</mcp-env-var>",
        "in": "header",
        "envVarName": "USER_ID",
        "schemeType": "apiKey",
        "schemeName": "user-id"
    }
];
export const inputParams = z.object({ "query": z.object({ "number": z.string().describe("A phone number"), "country-code": z.string().describe("ISO 2-letter country code, assume numbers are based in this country. <br>If not set numbers are assumed to be in international format (with or without the leading + sign)").optional() }).optional() }).shape;
