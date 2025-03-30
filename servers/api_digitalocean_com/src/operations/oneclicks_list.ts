import { z } from "zod"

export const toolName = `oneclicks_list`
export const toolDescription = `List 1-Click Applications`
export const baseUrl = `https://api.digitalocean.com`
export const path = `/v2/1-clicks`
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

export const inputParams = z.object({ "query": z.object({ "type": z.enum(["droplet","kubernetes"]).describe("Restrict results to a certain type of 1-Click.").optional() }).optional() }).shape