import { z } from "zod"

export const toolName = `listidupdate`
export const toolDescription = `Update List.`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/lists/{id}`
export const method = `put`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  },
  {
    "key": "Authorization",
    "value": "OAuth <mcp-env-var>OAUTH_CREDENTIALS</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH_CREDENTIALS",
    "schemeType": "http",
    "schemeScheme": "OAuth"
  }
]

export const inputParams = z.object({ "path": z.object({ "id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("The unique identifier of this List.") }).optional(), "body": z.object({ "description": z.string().min(0).max(100).optional(), "name": z.string().min(1).max(25).optional(), "private": z.boolean().optional() }).optional() }).shape