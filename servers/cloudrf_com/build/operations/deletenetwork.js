import { z } from "zod";
export const toolName = `deletenetwork`;
export const toolDescription = `Delete an entire network`;
export const baseUrl = `https://api.cloudrf.com`;
export const path = `/archive/delete/network`;
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
export const inputParams = z.object({ "query": z.object({ "nid": z.string().describe("Network name") }).optional() }).shape;
