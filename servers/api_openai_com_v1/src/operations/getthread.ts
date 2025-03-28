import { z } from "zod"

export const toolName = `getthread`
export const toolDescription = `Retrieves a thread.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/threads/{thread_id}`
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

export const inputParams = z.object({ "path": z.object({ "thread_id": z.string().describe("The ID of the thread to retrieve.") }).optional() }).shape