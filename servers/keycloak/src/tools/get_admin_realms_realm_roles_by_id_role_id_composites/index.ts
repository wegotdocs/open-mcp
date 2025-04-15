import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_roles_by_id_role_id_composites",
  "toolDescription": "Get role's children Returns a set of role's children provided the role is a composite.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles-by-id/{role-id}/composites",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "role-id": "role-id"
    },
    "query": {
      "first": "first",
      "max": "max",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool