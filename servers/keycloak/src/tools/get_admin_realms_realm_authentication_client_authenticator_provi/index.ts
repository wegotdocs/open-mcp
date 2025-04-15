import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_authentication_client_authenticator_provi",
  "toolDescription": "Get client authenticator providers Returns a stream of client authenticator providers.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/client-authenticator-providers",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool