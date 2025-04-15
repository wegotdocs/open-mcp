import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_authentication_required_actions_alias_",
  "toolDescription": "Delete RequiredAction configuration",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/required-actions/{alias}/config",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "alias": "alias"
    }
  },
  inputParamsSchema
}

export default tool