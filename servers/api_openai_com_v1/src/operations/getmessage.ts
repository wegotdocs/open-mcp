import { z } from "zod"

export const toolName = `getmessage`
export const toolDescription = `Retrieve a message.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/threads/{thread_id}/messages/{message_id}`
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

export const inputParams = z.object({ "path": z.object({ "thread_id": z.string().describe("The ID of the [thread](/docs/api-reference/threads) to which this message belongs."), "message_id": z.string().describe("The ID of the message to retrieve.") }).optional() }).shape