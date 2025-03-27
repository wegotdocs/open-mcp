import { z } from "zod";
export const toolName = `fetchoperations`;
export const toolDescription = `Retrieve the operations accessible to a a given user.`;
export const baseUrl = `https://platform.climate.com`;
export const path = `/v4/operations/all`;
export const method = `get`;
export const security = [
    {
        "key": "X-Api-Key",
        "value": "<mcp-env-var>X_API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "X_API_KEY",
        "schemeType": "apiKey",
        "schemeName": "X-Api-Key"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "query": z.object({ "resourceOwnerId": z.string().describe("Optional comma-separated list of resource owner unique identifiers by which to filter results.").optional() }).optional() }).shape;
