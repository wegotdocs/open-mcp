import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_authentication_unregistered_required_acti",
  "toolDescription": "Get unregistered required actions Returns a stream of unregistered required actions.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/unregistered-required-actions",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool