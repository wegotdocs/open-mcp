import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_users_user_id_role_mappings_clients_clien",
  "toolDescription": "Get effective client-level role mappings This recurses any composite roles",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/role-mappings/clients/{client-id}/composite",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "briefRepresentation": "briefRepresentation"
    }
  },
  inputParamsSchema
}

export default tool