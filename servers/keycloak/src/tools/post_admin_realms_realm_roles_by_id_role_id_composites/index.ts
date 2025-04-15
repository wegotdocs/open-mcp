import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_roles_by_id_role_id_composites",
  "toolDescription": "Make the role a composite role by associating some child roles",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles-by-id/{role-id}/composites",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "role-id": "role-id"
    }
  },
  inputParamsSchema
}

export default tool