import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_client_templates",
  "toolDescription": "Get client scopes belonging to the realm Returns a list of client scopes belonging to the realm",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-templates",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool