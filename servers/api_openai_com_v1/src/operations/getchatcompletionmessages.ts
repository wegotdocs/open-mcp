import { z } from "zod"

export const toolName = `getchatcompletionmessages`
export const toolDescription = `Get the messages in a stored chat completion. Only Chat Completions that
have been created with the `store` parameter set to `true` will be
returned.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/chat/completions/{completion_id}/messages`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "path": z.object({ "completion_id": z.string().describe("The ID of the chat completion to retrieve messages from.") }).optional(), "query": z.object({ "after": z.string().describe("Identifier for the last message from the previous pagination request.").optional(), "limit": z.number().int().describe("Number of messages to retrieve."), "order": z.enum(["asc","desc"]).describe("Sort order for messages by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`.") }).optional() }).shape