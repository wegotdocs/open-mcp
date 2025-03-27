import { z } from "zod";
export const toolName = `getavailablenumbers`;
export const toolDescription = `Search available numbers`;
export const baseUrl = `https://rest.nexmo.com`;
export const path = `/number/search`;
export const method = `get`;
export const security = [
    {
        "key": "api_key",
        "value": "<mcp-env-var>API_KEY</mcp-env-var>",
        "in": "query",
        "envVarName": "API_KEY",
        "schemeType": "apiKey",
        "schemeName": "api_key"
    },
    {
        "key": "api_secret",
        "value": "<mcp-env-var>API_SECRET</mcp-env-var>",
        "in": "query",
        "envVarName": "API_SECRET",
        "schemeType": "apiKey",
        "schemeName": "api_secret"
    }
];
export const inputParams = z.object({ "query": z.object({ "country": z.string().min(2).max(2).describe("The two character country code in ISO 3166-1 alpha-2 format"), "type": z.enum(["landline", "mobile-lvn", "landline-toll-free"]).describe("Set this parameter to filter the type of number, such as mobile or landline").optional(), "pattern": z.string().describe("The number pattern you want to search for. Use in conjunction with `search_pattern`.").optional(), "search_pattern": z.union([z.literal(0), z.literal(1), z.literal(2)]).describe("The strategy you want to use for matching:\n\n\n* `0` - Search for numbers that start with `pattern` (Note: all numbers are in E.164 format, so the starting pattern includes the country code, such as 1 for USA)\n* `1` - Search for numbers that contain `pattern`\n* `2` - Search for numbers that end with `pattern`\n"), "features": z.enum(["SMS", "VOICE", "SMS,VOICE", "MMS", "SMS,MMS", "VOICE,MMS", "SMS,MMS,VOICE"]).describe("Available features are `SMS`, `VOICE` and `MMS`. To look for numbers that support multiple features, use a comma-separated value: `SMS,MMS,VOICE`.").optional(), "size": z.number().int().lte(100).describe("Page size"), "index": z.number().int().describe("Page index") }).optional() }).shape;
