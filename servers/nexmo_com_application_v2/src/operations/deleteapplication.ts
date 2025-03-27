import { z } from "zod"

export const toolName = `deleteapplication`
export const toolDescription = `Delete an application`
export const baseUrl = `https://api.nexmo.com/v2/applications`
export const path = `/{id}`
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