import { z } from "zod";
export const toolName = `collectionticketsupdate`;
export const toolDescription = `Update Ticket`;
export const baseUrl = `https://unify.apideck.com`;
export const path = `/issue-tracking/collections/{collection_id}/tickets/{ticket_id}`;
export const method = `patch`;
export const security = [
    {
        "key": "Authorization",
        "value": "<mcp-env-var>AUTHORIZATION</mcp-env-var>",
        "in": "header",
        "envVarName": "AUTHORIZATION",
        "schemeType": "apiKey",
        "schemeName": "Authorization"
    }
];
export const inputParams = z.object({ "path": z.object({ "ticket_id": z.string().describe("ID of the ticket you are acting upon."), "collection_id": z.string().describe("The collection ID") }).optional(), "header": z.object({ "x-apideck-consumer-id": z.string().describe("ID of the consumer which you want to get or push data from"), "x-apideck-app-id": z.string().describe("The ID of your Unify application"), "x-apideck-service-id": z.string().describe("Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.").optional() }).optional(), "query": z.object({ "raw": z.boolean().describe("Include raw response. Mostly used for debugging purposes") }).optional(), "body": z.object({ "assignees": z.array(z.object({ "id": z.string().describe("A unique identifier for an object."), "username": z.string().readonly().optional() }).strict()).optional(), "collection_id": z.string().describe("The ticket's collection ID").readonly().optional(), "completed_at": z.string().datetime({ offset: true }).nullable().describe("When the ticket was completed").readonly().optional(), "created_at": z.string().datetime({ offset: true }).describe("The date and time when the object was created.").readonly().optional(), "created_by": z.string().nullable().describe("The user who created the object.").readonly().optional(), "description": z.string().describe("The ticket's description. HTML version of description is mapped if supported by the third-party platform").optional(), "due_date": z.string().datetime({ offset: true }).nullable().describe("Due date of the ticket").optional(), "id": z.string().describe("A unique identifier for an object.").readonly(), "parent_id": z.string().describe("The ticket's parent ID").optional(), "priority": z.enum(["low", "normal", "high", "urgent"]).describe("Priority of the ticket").optional(), "status": z.string().nullable().describe("The current status of the ticket. Possible values include: open, in_progress, closed, or - in cases where there is no clear mapping - the original value passed through.").optional(), "subject": z.string().describe("Subject of the ticket").optional(), "tags": z.array(z.object({ "id": z.string().describe("A unique identifier for an object."), "name": z.string().readonly().optional() }).strict()).optional(), "type": z.string().describe("The ticket's type").optional(), "updated_at": z.string().datetime({ offset: true }).nullable().describe("The date and time when the object was last updated.").readonly().optional() }).strict().optional() }).shape;
