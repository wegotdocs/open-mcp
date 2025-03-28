import { z } from "zod"

export const toolName = `get_admin_users_invites`
export const toolDescription = `Get All Invites`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/admin/users/invites`
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

export const inputParams = z.object({ "query": z.object({ "pageSize": z.number().int().optional(), "currentPage": z.number().int().optional(), "role": z.enum(["admin","member"]).optional(), "email": z.string().email().optional(), "status": z.enum(["pending","cancelled","accepted","expired"]).optional() }).optional() }).shape