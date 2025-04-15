import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_users_profile",
  "toolDescription": "Get the configuration for the user profile",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/profile",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool