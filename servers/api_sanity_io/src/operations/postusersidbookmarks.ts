import { z } from "zod"

export const toolName = `postusersidbookmarks`
export const toolDescription = `Add Tweet to Bookmarks`
export const baseUrl = `https://api.twitter.com`
export const path = `/2/users/{id}/bookmarks`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "path": z.object({ "id": z.string().describe("Unique identifier of this User. The value must be the same as the authenticated user.") }).optional(), "body": z.object({ "tweet_id": z.string().regex(new RegExp("^[0-9]{1,19}$")).describe("Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.") }).optional() }).shape