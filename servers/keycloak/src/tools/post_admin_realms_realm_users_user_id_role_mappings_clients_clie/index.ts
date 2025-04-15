import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_users_user_id_role_mappings_clients_clie",
  "toolDescription": "Add client-level roles to the user or group role mapping",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/role-mappings/clients/{client-id}",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool