import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_users_user_id_reset_password",
  "toolDescription": "Set up a new password for the user.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/reset-password",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "id": "id",
      "type": "type",
      "userLabel": "userLabel",
      "createdDate": "createdDate",
      "secretData": "secretData",
      "credentialData": "credentialData",
      "priority": "priority",
      "value": "value",
      "temporary": "temporary",
      "federationLink": "federationLink"
    }
  },
  inputParamsSchema
}

export default tool