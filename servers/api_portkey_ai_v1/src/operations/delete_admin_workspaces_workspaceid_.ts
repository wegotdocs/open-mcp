import { z } from "zod"

export const toolName = `delete_admin_workspaces_workspaceid_`
export const toolDescription = `Delete a workspace`
export const baseUrl = `https://api.portkey.ai/v1`
export const path = `/admin/workspaces/{workspaceId}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "workspaceId": z.string() }).optional() }).shape