import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_authentication_required_actions_alias_lo",
  "toolDescription": "Lower required action's priority",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/required-actions/{alias}/lower-priority",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "alias": "alias"
    }
  },
  inputParamsSchema
}

export default tool