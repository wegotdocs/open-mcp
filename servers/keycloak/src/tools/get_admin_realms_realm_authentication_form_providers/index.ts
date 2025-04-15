import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_authentication_form_providers",
  "toolDescription": "Get form providers Returns a stream of form providers.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/form-providers",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool