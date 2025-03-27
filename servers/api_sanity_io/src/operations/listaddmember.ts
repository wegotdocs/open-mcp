import { z } from "zod"

export const toolName = `listaddmember`
export const toolDescription = `Add a List member`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/lists/{id}/members`
export const method = `post`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("The unique identifier of this List.") }).optional(), "body": z.object({ "user_id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.") }).optional() }).shape