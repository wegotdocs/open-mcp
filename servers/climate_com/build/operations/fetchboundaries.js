import { z } from "zod";
export const toolName = `fetchboundaries`;
export const toolDescription = `Retrieve Boundaries in batch`;
export const baseUrl = `https://platform.climate.com`;
export const path = `/v4/boundaries/query`;
export const method = `post`;
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
export const inputParams = z.object({ "body": z.object({ "ids": z.array(z.string().uuid().describe("Unique identifier for the boundary.")) }).optional() }).shape;
