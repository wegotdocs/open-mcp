import { z } from "zod"

export const toolName = `post_install_tool_backoffice_users_user_id_tools_post`
export const toolDescription = `Post Install Tool`
export const baseUrl = `https://api.example.com`
export const path = `/backoffice/users/{user_id}/tools`
export const method = `post`
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

export const inputParams = z.object({ "path": z.object({ "user_id": z.string() }).optional(), "body": z.object({ "tool_id": z.string(), "config": z.union([z.record(z.any()), z.null()]).optional() }).describe("User Install Tool Request").optional() }).shape