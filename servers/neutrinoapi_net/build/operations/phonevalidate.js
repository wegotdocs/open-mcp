import { z } from "zod";
export const toolName = `phonevalidate`;
export const toolDescription = `Phone Validate`;
export const baseUrl = `https://neutrinoapi.net`;
export const path = `/phone-validate`;
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
export const inputParams = z.object({ "query": z.object({ "number": z.string().describe("A phone number. This can be in international format (E.164) or local format. If passing local format you must also set either the 'country-code' OR 'ip' options as well"), "country-code": z.string().describe("ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)").optional(), "ip": z.string().describe("Pass in a users IP address and we will assume numbers are based in the country of the IP address").optional() }).optional() }).shape;
