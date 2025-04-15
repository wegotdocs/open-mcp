import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_users_user_id_unmanagedattributes",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/unmanagedAttributes",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool