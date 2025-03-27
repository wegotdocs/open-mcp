import { z } from "zod";
export const toolName = `binlookup`;
export const toolDescription = `BIN Lookup`;
export const baseUrl = `https://neutrinoapi.net`;
export const path = `/bin-lookup`;
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
export const inputParams = z.object({ "query": z.object({ "bin-number": z.string().describe("The BIN or IIN number. This is the first 6, 8 or 10 digits of a card number, use 8 (or more) digits for the highest level of accuracy"), "customer-ip": z.string().describe("Pass in the customers IP address and we will return some extra information about them").optional() }).optional() }).shape;
