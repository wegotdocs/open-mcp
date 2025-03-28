import { z } from "zod"

export const toolName = `get_admin_workspaces_workspaceid_users`
export const toolDescription = `Get workspace members`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/admin/workspaces/{workspaceId}/users`
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

export const inputParams = z.object({ "path": z.object({ "workspaceId": z.string() }).optional(), "query": z.object({ "current_page": z.number(), "page_size": z.number(), "role": z.enum(["admin","manager","member"]).optional(), "email": z.string().optional() }).optional() }).shape