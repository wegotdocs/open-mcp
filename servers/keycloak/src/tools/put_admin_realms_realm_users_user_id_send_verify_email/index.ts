import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_users_user_id_send_verify_email",
  "toolDescription": "Send an email-verification email to the user An email contains a link the user can click to verify their email address.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/send-verify-email",
  "method": "put",
  "security": [],
  "paramsMap": {
    "query": {
      "client_id": "client_id",
      "lifespan": "lifespan",
      "redirect_uri": "redirect_uri"
    }
  },
  inputParamsSchema
}

export default tool