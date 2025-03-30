import { z } from "zod"

export const toolName = `actions_get`
export const toolDescription = `Retrieve an Existing Action`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/actions/{action_id}`
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

export const inputParams = z.object({ "path": z.object({ "action_id": z.number().int().gte(1).describe("A unique numeric ID that can be used to identify and reference an action.") }).optional() }).shape