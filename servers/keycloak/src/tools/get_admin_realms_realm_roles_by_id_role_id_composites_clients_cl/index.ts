import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_roles_by_id_role_id_composites_clients_cl",
  "toolDescription": "Get client-level roles for the client that are in the role's composite",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles-by-id/{role-id}/composites/clients/{clientUuid}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "clientUuid": "clientUuid",
      "role-id": "role-id"
    }
  },
  inputParamsSchema
}

export default tool