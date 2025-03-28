import { z } from "zod"

export const toolName = `put_admin_users_userid_`
export const toolDescription = `Update user`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/admin/users/{userId}`
export const method = `put`
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

export const inputParams = z.object({ "path": z.object({ "userId": z.string() }).optional(), "body": z.object({ "role": z.enum(["admin","member"]).optional() }).optional() }).shape