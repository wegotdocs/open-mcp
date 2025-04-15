import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_authentication_config",
  "toolDescription": "Create new authenticator configuration",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/config",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "alias": "alias",
      "config": "config"
    }
  },
  inputParamsSchema
}

export default tool