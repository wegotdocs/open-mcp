import { z } from "zod";
export const toolName = `replaceconversation`;
export const toolDescription = `Update a conversation`;
export const baseUrl = `https://api.nexmo.com/v0.1`;
export const path = `/conversations/{conversation_id}`;
export const method = `put`;
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
export const inputParams = z.object({ "body": z.object({ "display_name": z.string().describe("The display name for the conversation. It does not have to be unique").optional(), "image_url": z.string().describe("A link to an image for conversations' and users' avatars").optional(), "name": z.string().describe("Unique name for a conversation").optional(), "properties": z.object({ "ttl": z.number().describe("Time to leave. After how many seconds an empty conversation is deleted.").optional() }).describe("Conversation properties").optional() }).optional() }).shape;
