import { z } from "zod"

export const toolName = `admin_api_keys_create`
export const toolDescription = `Create an organization admin API key`
export const baseUrl = `https://api.openai.com/v1`
export const path = `/organization/admin_api_keys`
export const method = `post`
export const security = [
  {
    "key": "Authorization",
    "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "API_KEY",
    "schemeType": "http",
    "schemeScheme": "bearer"
  }
]

export const inputParams = z.object({ "body": z.object({ "name": z.string() }).optional() }).shape