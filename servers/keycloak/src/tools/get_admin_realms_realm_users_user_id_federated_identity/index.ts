import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_users_user_id_federated_identity",
  "toolDescription": "Get social logins associated with the user",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/federated-identity",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool