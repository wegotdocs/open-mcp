import { z } from "zod";
export const toolName = `list`;
export const toolDescription = `List calculations from your archive`;
export const baseUrl = `https://api.cloudrf.com`;
export const path = `/archive/list`;
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
export const inputParams = z.object({ "query": z.object({ "n": z.number().describe("North bounding box").optional(), "e": z.number().describe("East bounding box").optional(), "s": z.number().describe("South bounding box").optional(), "w": z.number().describe("West bounding box").optional() }).optional() }).shape;
