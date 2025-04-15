import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_roles_role_name_",
  "toolDescription": "Get a role by name",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "role-name": "role-name"
    }
  },
  inputParamsSchema
}

export default tool