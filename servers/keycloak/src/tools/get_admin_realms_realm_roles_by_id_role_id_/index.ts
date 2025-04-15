import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_roles_by_id_role_id_",
  "toolDescription": "Get a specific role's representation",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles-by-id/{role-id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "role-id": "role-id"
    }
  },
  inputParamsSchema
}

export default tool