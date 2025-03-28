import { z } from "zod"

export const toolName = `getassistant`
export const toolDescription = `Retrieves an assistant.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/assistants/{assistant_id}`
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

export const inputParams = z.object({ "path": z.object({ "assistant_id": z.string().describe("The ID of the assistant to retrieve.") }).optional() }).shape