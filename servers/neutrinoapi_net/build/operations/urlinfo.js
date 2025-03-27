import { z } from "zod";
export const toolName = `urlinfo`;
export const toolDescription = `URL Info`;
export const baseUrl = `https://neutrinoapi.net`;
export const path = `/url-info`;
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
export const inputParams = z.object({ "query": z.object({ "url": z.string().describe("The URL to probe"), "fetch-content": z.boolean().describe("If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content (e.g. with the HTML Extract or HTML Clean APIs)"), "ignore-certificate-errors": z.boolean().describe("Ignore any TLS/SSL certificate errors and load the URL anyway"), "timeout": z.number().int().describe("Timeout in seconds. Give up if still trying to load the URL after this number of seconds"), "retry": z.number().int().describe("If the request fails for any reason try again this many times") }).optional() }).shape;
