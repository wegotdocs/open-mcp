import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_authentication_authenticator_providers",
  "toolDescription": "Get authenticator providers Returns a stream of authenticator providers.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/authenticator-providers",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool