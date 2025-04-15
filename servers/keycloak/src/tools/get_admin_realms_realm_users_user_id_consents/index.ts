import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_users_user_id_consents",
  "toolDescription": "Get consents granted by the user",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/consents",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool