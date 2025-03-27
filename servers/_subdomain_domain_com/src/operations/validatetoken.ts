import { z } from "zod"

export const toolName = `validatetoken`
export const toolDescription = `Validate Token`
export const baseUrl = `https://{subdomain}.{domain}.com`
export const path = `/api/v2/any_channel/validate_token`
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