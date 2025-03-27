import { z } from "zod";
export const toolName = `convert`;
export const toolDescription = `Convert`;
export const baseUrl = `https://neutrinoapi.net`;
export const path = `/convert`;
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
export const inputParams = z.object({ "query": z.object({ "from-value": z.string().describe("The value to convert from (e.g. 10.95)"), "from-type": z.string().describe("The type of the value to convert from (e.g. USD)"), "to-type": z.string().describe("The type to convert to (e.g. EUR)") }).optional() }).shape;
