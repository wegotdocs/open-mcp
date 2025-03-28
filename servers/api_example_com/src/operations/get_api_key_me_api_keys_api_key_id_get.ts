import { z } from "zod"

export const toolName = `get_api_key_me_api_keys_api_key_id_get`
export const toolDescription = `Get Api Key`
export const baseUrl = `https://api.example.com`
export const path = `/me/api-keys/{api_key_id}`
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

export const inputParams = z.object({ "path": z.object({ "api_key_id": z.number().int() }).optional() }).shape