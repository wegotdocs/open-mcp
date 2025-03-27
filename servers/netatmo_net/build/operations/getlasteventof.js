import { z } from "zod";
export const toolName = `getlasteventof`;
export const toolDescription = `Returns most recent events.`;
export const baseUrl = `https://api.netatmo.net/api`;
export const path = `/getlasteventof`;
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
export const inputParams = z.object({ "query": z.object({ "home_id": z.string().describe("ID of the Home you're interested in"), "person_id": z.string().describe("Your request will retrieve all events of the given home until the most recent event of the given person"), "offset": z.number().int().describe("Number of events to retrieve. Default is 30.").optional() }).optional() }).shape;
