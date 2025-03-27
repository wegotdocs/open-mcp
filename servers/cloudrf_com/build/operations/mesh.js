import { z } from "zod";
export const toolName = `mesh`;
export const toolDescription = `Merge sites into a super layer.`;
export const baseUrl = `https://api.cloudrf.com`;
export const path = `/mesh`;
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
export const inputParams = z.object({ "query": z.object({ "network": z.string().describe("Network name eg. 100_BLUE_repeaters_nationwide"), "name": z.string().describe("Super layer name eg. National_map") }).optional() }).shape;
