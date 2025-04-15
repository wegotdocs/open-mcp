import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_roles_role_name_",
  "toolDescription": "Delete a role by name",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles/{role-name}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "role-name": "role-name"
    }
  },
  inputParamsSchema
}

export default tool