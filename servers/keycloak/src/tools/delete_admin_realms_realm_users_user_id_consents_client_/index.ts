import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_users_user_id_consents_client_",
  "toolDescription": "Revoke consent and offline tokens for particular client from user",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/consents/{client}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "client": "client"
    }
  },
  inputParamsSchema
}

export default tool