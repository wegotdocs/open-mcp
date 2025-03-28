import { z } from "zod"

export const toolName = `get_default_api_key_me_api_keys_default_get`
export const toolDescription = `Get Default Api Key`
export const baseUrl = `https://api.example.com`
export const path = `/me/api-keys/default`
export const method = `get`
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

export const inputParams = z.object({}).shape