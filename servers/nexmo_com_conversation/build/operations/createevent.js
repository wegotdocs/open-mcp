import { z } from "zod";
export const toolName = `createevent`;
export const toolDescription = `Create an event`;
export const baseUrl = `https://api.nexmo.com/v0.1`;
export const path = `/conversations/{conversation_id}/events`;
export const method = `post`;
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
export const inputParams = z.object({ "body": z.object({ "body": z.record(z.any()).describe("Event Body").optional(), "from": z.string().describe("Member ID"), "to": z.string().describe("Member ID").optional(), "type": z.string().describe("Event type") }).describe("Create New Event Request Payload Object").optional() }).shape;
