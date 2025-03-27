import { z } from "zod";
export const toolName = `emailvalidate`;
export const toolDescription = `Email Validate`;
export const baseUrl = `https://neutrinoapi.net`;
export const path = `/email-validate`;
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
export const inputParams = z.object({ "query": z.object({ "email": z.string().describe("An email address"), "fix-typos": z.boolean().describe("Automatically attempt to fix typos in the address") }).optional() }).shape;
