import { z } from "zod";
export const toolName = `geteventsuntil`;
export const toolDescription = `Returns the snapshot associated to an event.`;
export const baseUrl = `https://api.netatmo.net/api`;
export const path = `/geteventsuntil`;
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
export const inputParams = z.object({ "query": z.object({ "home_id": z.string().describe("ID of the Home you're interested in"), "event_id": z.string().describe("Your request will retrieve all the events until this one") }).optional() }).shape;
