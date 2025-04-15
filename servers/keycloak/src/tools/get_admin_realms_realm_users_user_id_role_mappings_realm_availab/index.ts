import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_users_user_id_role_mappings_realm_availab",
  "toolDescription": "Get realm-level roles that can be mapped",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/role-mappings/realm/available",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool