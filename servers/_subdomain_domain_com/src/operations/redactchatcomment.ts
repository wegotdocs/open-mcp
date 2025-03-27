import { z } from "zod"

export const toolName = `redactchatcomment`
export const toolDescription = `Redact Chat Comment`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/chat_redactions/{ticket_id}`
export const method = `put`
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