import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_authentication_required_actions_alias_con",
  "toolDescription": "Update RequiredAction configuration",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/required-actions/{alias}/config",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "alias": "alias"
    },
    "body": {
      "config": "config"
    }
  },
  inputParamsSchema
}

export default tool