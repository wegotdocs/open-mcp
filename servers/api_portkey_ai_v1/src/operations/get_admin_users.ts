import { z } from "zod"

export const toolName = `get_admin_users`
export const toolDescription = `Get users`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/admin/users`
export const method = `get`
export const security = [
  {
    "key": "x-portkey-api-key",
    "value": "<mcp-env-var>X_PORTKEY_API_KEY</mcp-env-var>",
    "in": "header",
    "envVarName": "X_PORTKEY_API_KEY",
    "schemeType": "apiKey",
    "schemeName": "x-portkey-api-key"
  }
]

export const inputParams = z.object({ "header": z.object({ "x-portkey-api-key": z.string().optional() }).optional(), "query": z.object({ "pageSize": z.number().int().optional(), "currentPage": z.number().int().optional(), "role": z.enum(["admin","member","owner"]).optional(), "email": z.string().email().optional() }).optional() }).shape