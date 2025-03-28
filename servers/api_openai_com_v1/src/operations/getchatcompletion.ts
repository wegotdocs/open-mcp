import { z } from "zod"

export const toolName = `getchatcompletion`
export const toolDescription = `Get a stored chat completion. Only Chat Completions that have been created
with the `store` parameter set to `true` will be returned.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/chat/completions/{completion_id}`
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

export const inputParams = z.object({ "path": z.object({ "completion_id": z.string().describe("The ID of the chat completion to retrieve.") }).optional() }).shape