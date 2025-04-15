import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_users_user_id_impersonation",
  "toolDescription": "Impersonate the user",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/impersonation",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool