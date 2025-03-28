import { z } from "zod"

export const toolName = `delete_installed_tool_me_user_tools_tool_id_delete`
export const toolDescription = `Delete Installed Tool`
export const baseUrl = `https://api.example.com`
export const path = `/me/user-tools/{tool_id}`
export const method = `delete`
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

export const inputParams = z.object({ "path": z.object({ "tool_id": z.string() }).optional() }).shape