import { z } from "zod"

export const toolName = `deletemessage`
export const toolDescription = `Deletes a message.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/threads/{thread_id}/messages/{message_id}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "thread_id": z.string().describe("The ID of the thread to which this message belongs."), "message_id": z.string().describe("The ID of the message to delete.") }).optional() }).shape