import { z } from "zod";
export const toolName = `getthermostatsdata`;
export const toolDescription = `The method getthermostatsdata returns information about user's thermostats such as their last measurements.`;
export const baseUrl = `https://api.netatmo.net/api`;
export const path = `/getthermostatsdata`;
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
export const inputParams = z.object({ "query": z.object({ "device_id": z.string().describe("Id of the device you want to retrieve information of").optional() }).optional() }).shape;
