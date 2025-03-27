import { z } from "zod";
export const toolName = `geocodereverse`;
export const toolDescription = `Geocode Reverse`;
export const baseUrl = `https://neutrinoapi.net`;
export const path = `/geocode-reverse`;
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
export const inputParams = z.object({ "query": z.object({ "latitude": z.string().describe("The location latitude in decimal degrees format"), "longitude": z.string().describe("The location longitude in decimal degrees format"), "language-code": z.string().describe("The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru</li> </ul>"), "zoom": z.string().describe("The zoom level to respond with: <br> <ul> <li>address - the most precise address available</li> <li>street - the street level</li> <li>city - the city level</li> <li>state - the state level</li> <li>country - the country level</li> </ul>") }).optional() }).shape;
