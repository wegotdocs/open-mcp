import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_authentication_required_actions_alias_con",
  "toolDescription": "Get RequiredAction provider configuration description",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/required-actions/{alias}/config-description",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "alias": "alias"
    }
  },
  inputParamsSchema
}

export default tool