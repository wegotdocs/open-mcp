import { z } from "zod";
export const toolName = `gettaxrates`;
export const toolDescription = `Get all available tax rates`;
export const baseUrl = `https://products.izettle.com`;
export const path = `/v1/taxes`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({}).shape;
