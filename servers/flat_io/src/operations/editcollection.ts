import { z } from "zod"

export const toolName = `editcollection`
export const toolDescription = `Update a collection's metadata`
export const baseUrl = `https://api.flat.io/v2`
export const path = `/collections/{collection}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "body": z.object({ "privacy": z.literal("private").describe("The collection main privacy mode.\n- `private`: The collection is private and can be only accessed, modified and administred by specified collaborators users.\n").optional(), "title": z.string().min(1).max(300).describe("The title of the collection").optional() }).describe("Edit the collection metadata").optional() }).shape