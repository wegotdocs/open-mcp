import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_logout_all",
  "toolDescription": "Removes all user sessions.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/logout-all",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool