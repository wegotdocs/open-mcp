import { z } from "zod"

export const toolName = `createbookmark`
export const toolDescription = `Create Bookmark`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/bookmarks`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Basic <mcp-env-var>USERNAME_PASSWORD_BASE64</mcp-env-var>",
    "in": "header",
    "envVarName": "USERNAME_PASSWORD_BASE64",
    "schemeType": "http",
    "schemeScheme": "basic"
  }
]

export const inputParams = z.object({ "body": z.object({ "bookmark": z.object({ "ticket_id": z.number().int().describe("The id of the ticket the bookmark is for.").optional() }).optional() }).optional() }).shape