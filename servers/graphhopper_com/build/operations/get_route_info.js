import { z } from "zod";
export const toolName = `get_route_info`;
export const toolDescription = `Coverage information`;
export const baseUrl = `https://graphhopper.com/api/1`;
export const path = `/route/info`;
export const method = `get`;
export const security = [
    {
        "key": "key",
        "value": "<mcp-env-var>KEY</mcp-env-var>",
        "in": "query",
        "envVarName": "KEY",
        "schemeType": "apiKey",
        "schemeName": "key"
    }
];
export const inputParams = z.object({}).shape;
