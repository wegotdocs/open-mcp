import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_authentication_form_action_providers",
  "toolDescription": "Get form action providers Returns a stream of form action providers.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/form-action-providers",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool