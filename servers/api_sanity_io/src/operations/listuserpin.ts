import { z } from "zod"

export const toolName = `listuserpin`
export const toolDescription = `Pin a List`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/users/{id}/pinned_lists`
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

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Unique identifier of this User. The value must be the same as the authenticated user.") }).optional(), "body": z.object({ "list_id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("The unique identifier of this List.") }).optional() }).shape