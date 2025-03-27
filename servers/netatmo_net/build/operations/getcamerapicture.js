import { z } from "zod";
export const toolName = `getcamerapicture`;
export const toolDescription = `Returns the snapshot associated to an event.`;
export const baseUrl = `https://api.netatmo.net/api`;
export const path = `/getcamerapicture`;
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
export const inputParams = z.object({ "query": z.object({ "image_id": z.string().describe("id of the image (can be retrieved as 'id' in 'face' in Gethomedata, or as 'id' in 'snapshot' in Getnextevents, Getlasteventof and Geteventsuntil)"), "key": z.string().describe("Security key to access snapshots.") }).optional() }).shape;
