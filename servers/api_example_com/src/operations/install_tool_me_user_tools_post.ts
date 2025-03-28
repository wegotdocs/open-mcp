import { z } from "zod"

export const toolName = `install_tool_me_user_tools_post`
export const toolDescription = `Install Tool`
export const baseUrl = `https://api.example.com`
export const path = `/me/user-tools`
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

export const inputParams = z.object({ "body": z.object({ "tool_id": z.string(), "config": z.union([z.record(z.any()), z.null()]).optional() }).describe("User Install Tool Request").optional() }).shape