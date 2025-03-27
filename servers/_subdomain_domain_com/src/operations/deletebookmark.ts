import { z } from "zod"

export const toolName = `deletebookmark`
export const toolDescription = `Delete Bookmark`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/bookmarks/{bookmark_id}`
export const method = `delete`
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

export const inputParams = z.object({}).shape