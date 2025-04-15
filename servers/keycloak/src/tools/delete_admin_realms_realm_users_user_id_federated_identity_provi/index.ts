import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_users_user_id_federated_identity_provi",
  "toolDescription": "Remove a social login provider from user",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/federated-identity/{provider}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "provider": "provider"
    }
  },
  inputParamsSchema
}

export default tool