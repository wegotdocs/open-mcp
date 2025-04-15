import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "parameters_admin_realms_realm_authentication_client_authenticato",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/client-authenticator-providers",
  "method": "parameters",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool