import { z } from "zod";
export const toolName = `retrieve_an_event`;
export const toolDescription = `Retrieve an Event`;
export const baseUrl = `https://api.increase.com`;
export const path = `/events/{event_id}`;
export const method = `get`;
export const security = [
    {
        "key": "Authorization",
        "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
        "in": "header",
        "envVarName": "API_KEY",
        "schemeType": "http",
        "schemeScheme": "bearer"
    }
];
export const inputParams = z.object({ "path": z.object({ "event_id": z.string().describe("The identifier of the Event.") }).optional() }).shape;
