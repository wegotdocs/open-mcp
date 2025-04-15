import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_roles_role_name_composites",
  "toolDescription": "Get composites of the role",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles/{role-name}/composites",
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