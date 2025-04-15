import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_users_user_id_credentials_credentialid_us",
  "toolDescription": "Update a credential label for a user",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/credentials/{credentialId}/userLabel",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "credentialId": "credentialId"
    }
  },
  inputParamsSchema
}

export default tool