import { z } from "zod";
export const toolName = `interference`;
export const toolDescription = `Find the best server for overlapping coverage`;
export const baseUrl = `https://api.cloudrf.com`;
export const path = `/interference`;
export const method = `get`;
export const security = [
    {
        "key": "key",
        "value": "<mcp-env-var>KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "KEY",
        "schemeType": "apiKey",
        "schemeName": "key"
    }
];
export const inputParams = z.object({ "query": z.object({ "network": z.string().describe("Network name eg. Overlapping broadcast stations"), "name": z.string().describe("Interference layer name eg. QRM_map") }).optional() }).shape;
