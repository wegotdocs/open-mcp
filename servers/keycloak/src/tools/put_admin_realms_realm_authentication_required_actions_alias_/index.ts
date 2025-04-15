import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_authentication_required_actions_alias_",
  "toolDescription": "Update required action",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/required-actions/{alias}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "alias": "alias"
    },
    "body": {
      "alias": "b_alias",
      "name": "name",
      "providerId": "providerId",
      "enabled": "enabled",
      "defaultAction": "defaultAction",
      "priority": "priority",
      "config": "config"
    }
  },
  inputParamsSchema
}

export default tool