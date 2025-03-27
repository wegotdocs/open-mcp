import { z } from "zod";
export const toolName = `getstationsdata`;
export const toolDescription = `The method getstationsdata Returns data from a user's Weather Stations (measures and device specific data).`;
export const baseUrl = `https://api.netatmo.net/api`;
export const path = `/getstationsdata`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    },
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
        "in": "header",
        "envVarName": "OAUTH2_TOKEN",
        "schemeType": "oauth2"
    }
];
export const inputParams = z.object({ "query": z.object({ "device_id": z.string().describe("Id of the device you want to retrieve information of").optional(), "get_favorites": z.boolean().describe("Whether to include the user's favorite Weather Stations in addition to the user's own Weather Stations") }).optional() }).shape;
