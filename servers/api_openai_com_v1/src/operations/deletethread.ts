import { z } from "zod"

export const toolName = `deletethread`
export const toolDescription = `Delete a thread.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/threads/{thread_id}`
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

export const inputParams = z.object({ "path": z.object({ "thread_id": z.string().describe("The ID of the thread to delete.") }).optional() }).shape