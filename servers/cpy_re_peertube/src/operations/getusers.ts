import { z } from "zod"

export const toolName = `getusers`
export const toolDescription = `List users`
export const baseUrl = `https://peertube2.cpy.re`
export const path = `/api/v1/users`
export const method = `get`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>OAUTH2_TOKEN</mcp-env-var>",
    "in": "header",
    "envVarName": "OAUTH2_TOKEN",
    "schemeType": "oauth2"
  }
]

export const inputParams = z.object({ "query": z.object({ "search": z.string().describe("Plain text search that will match with user usernames or emails").optional(), "blocked": z.boolean().describe("Filter results down to (un)banned users").optional(), "start": z.number().int().gte(0).describe("Offset used to paginate results").optional(), "count": z.number().int().gte(1).lte(100).describe("Number of items to return"), "sort": z.enum(["-id","-username","-createdAt"]).describe("Sort users by criteria").optional() }).optional() }).shape