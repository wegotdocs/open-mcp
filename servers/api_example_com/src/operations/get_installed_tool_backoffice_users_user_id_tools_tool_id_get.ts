import { z } from "zod"

export const toolName = `get_installed_tool_backoffice_users_user_id_tools_tool_id_get`
export const toolDescription = `Get Installed Tool`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/users/{user_id}/tools/{tool_id}`
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

export const inputParams = z.object({ "path": z.object({ "user_id": z.string(), "tool_id": z.string() }).optional() }).shape