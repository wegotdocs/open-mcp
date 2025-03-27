import { z } from "zod"

export const toolName = `get_webhooks_id_`
export const toolDescription = `Read a webhook`
export const baseUrl = `https://api.bulksms.com/v1`
export const path = `/webhooks/{id}`
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

export const inputParams = z.object({}).shape