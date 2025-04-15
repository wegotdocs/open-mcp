import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_roles_by_id_role_id_composites",
  "toolDescription": "Remove a set of roles from the role's composite",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles-by-id/{role-id}/composites",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "role-id": "role-id"
    }
  },
  inputParamsSchema
}

export default tool