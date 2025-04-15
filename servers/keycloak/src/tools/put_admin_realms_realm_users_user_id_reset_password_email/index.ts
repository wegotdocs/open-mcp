import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_users_user_id_reset_password_email",
  "toolDescription": "Send an email to the user with a link they can click to reset their password.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/reset-password-email",
  "method": "put",
  "security": [],
  "paramsMap": {
    "query": {
      "client_id": "client_id",
      "redirect_uri": "redirect_uri"
    }
  },
  inputParamsSchema
}

export default tool