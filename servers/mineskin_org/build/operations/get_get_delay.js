import { z } from "zod";
export const toolName = `get_get_delay`;
export const toolDescription = ``;
export const baseUrl = `https://api.mineskin.org`;
export const path = `/get/delay`;
export const method = `get`;
export const security = [
    {
        "key": "key",
        "value": "<mcp-env-var>KEY</mcp-env-var>",
        "in": "query",
        "envVarName": "KEY",
        "schemeType": "apiKey",
        "schemeName": "key"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const inputParams = z.object({ "header": z.object({ "User-Agent": z.string().describe("Custom User-Agent for your application, see [user-agent.dev](https://user-agent.dev/) for implementation examples") }).optional() }).shape;
