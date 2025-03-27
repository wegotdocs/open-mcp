import { z } from "zod"

export const toolName = `createticketfromtweet`
export const toolDescription = `Create Ticket from Tweet`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/channels/twitter/tickets`
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

export const inputParams = z.object({}).shape