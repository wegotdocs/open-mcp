import { z } from "zod"

export const toolName = `gettingtwicketstatus`
export const toolDescription = `List Ticket statuses`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/channels/twitter/tickets/{comment_id}/statuses`
export const method = `get`
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

export const inputParams = z.object({ "query": z.object({ "ids": z.string().describe("Optional comment ids to retrieve tweet information for only particular comments").optional() }).optional() }).shape