import { z } from "zod"

export const toolName = `deletetweetbyid`
export const toolDescription = `Tweet delete by Tweet ID`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/tweets/{id}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.") }).optional() }).shape