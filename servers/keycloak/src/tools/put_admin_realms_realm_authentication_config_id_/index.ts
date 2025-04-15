import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_authentication_config_id_",
  "toolDescription": "Update authenticator configuration",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/authentication/config/{id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "id": "b_id",
      "alias": "alias",
      "config": "config"
    }
  },
  inputParamsSchema
}

export default tool