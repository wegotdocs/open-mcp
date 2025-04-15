import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_roles_role_name_composites_clients_client",
  "toolDescription": "Get client-level roles for the client that are in the role's composite",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles/{role-name}/composites/clients/{client-uuid}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "client-uuid": "client-uuid",
      "role-name": "role-name"
    }
  },
  inputParamsSchema
}

export default tool