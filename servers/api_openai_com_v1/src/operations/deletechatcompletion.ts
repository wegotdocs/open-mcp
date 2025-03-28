import { z } from "zod"

export const toolName = `deletechatcompletion`
export const toolDescription = `Delete a stored chat completion. Only Chat Completions that have been
created with the `store` parameter set to `true` can be deleted.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/chat/completions/{completion_id}`
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

export const inputParams = z.object({ "path": z.object({ "completion_id": z.string().describe("The ID of the chat completion to delete.") }).optional() }).shape