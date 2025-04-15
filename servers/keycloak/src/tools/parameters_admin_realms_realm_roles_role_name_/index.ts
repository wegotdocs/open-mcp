import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_admin_realms_realm_roles_role_name_",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles/{role-name}",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool