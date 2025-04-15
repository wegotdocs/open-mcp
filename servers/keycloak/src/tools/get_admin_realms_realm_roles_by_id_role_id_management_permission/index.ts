import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_roles_by_id_role_id_management_permission",
  "toolDescription": "Return object stating whether role Authorization permissions have been initialized or not and a reference",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles-by-id/{role-id}/management/permissions",
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