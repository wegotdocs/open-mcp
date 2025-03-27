import { z } from "zod";
export const toolName = `gethomecoachsdata`;
export const toolDescription = `The method gethomecoachsdata Returns data from a user Healthy Home Coach Station (measures and device specific data).`;
export const baseUrl = `https://api.netatmo.net/api`;
export const path = `/gethomecoachsdata`;
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
