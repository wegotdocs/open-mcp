import { z } from "zod"

export const toolName = `updatechatcompletion`
export const toolDescription = `Modify a stored chat completion. Only Chat Completions that have been
created with the `store` parameter set to `true` can be modified. Currently,
the only supported modification is to update the `metadata` field.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/chat/completions/{completion_id}`
export const method = `post`
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

export const inputParams = z.object({ "path": z.object({ "completion_id": z.string().describe("The ID of the chat completion to update.") }).optional(), "body": z.object({ "metadata": z.record(z.string()).nullable().describe("Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n") }).optional() }).shape