import { z } from "zod"

export const toolName = `listchatcompletions`
export const toolDescription = `List stored Chat Completions. Only Chat Completions that have been stored
with the `store` parameter set to `true` will be returned.`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/chat/completions`
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

export const inputParams = z.object({ "query": z.object({ "model": z.string().describe("The model used to generate the Chat Completions.").optional(), "metadata": z.record(z.string()).nullable().describe("Set of 16 key-value pairs that can be attached to an object. This can be\nuseful for storing additional information about the object in a structured\nformat, and querying for objects via API or the dashboard. \n\nKeys are strings with a maximum length of 64 characters. Values are strings\nwith a maximum length of 512 characters.\n").optional(), "after": z.string().describe("Identifier for the last chat completion from the previous pagination request.").optional(), "limit": z.number().int().describe("Number of Chat Completions to retrieve."), "order": z.enum(["asc","desc"]).describe("Sort order for Chat Completions by timestamp. Use `asc` for ascending order or `desc` for descending order. Defaults to `asc`.") }).optional() }).shape