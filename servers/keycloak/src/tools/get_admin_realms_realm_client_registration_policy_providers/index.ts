import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_client_registration_policy_providers",
  "toolDescription": "Base path for retrieve providers with the configProperties properly filled",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/client-registration-policy/providers",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool