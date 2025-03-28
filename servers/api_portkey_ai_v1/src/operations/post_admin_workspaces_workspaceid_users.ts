import { z } from "zod"

export const toolName = `post_admin_workspaces_workspaceid_users`
export const toolDescription = `Add workspace member`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/admin/workspaces/{workspaceId}/users`
export const method = `post`
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

export const inputParams = z.object({ "path": z.object({ "workspaceId": z.string() }).optional(), "body": z.object({ "users": z.array(z.object({ "id": z.string().uuid().optional(), "role": z.enum(["admin","member"]).optional() })).optional() }).optional() }).shape