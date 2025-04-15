import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_admin_realms_realm_users_user_id_credentials_credentialid_m",
  "toolDescription": "Move a credential to a first position in the credentials list of the user",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/credentials/{credentialId}/moveToFirst",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "credentialId": "credentialId"
    }
  },
  inputParamsSchema
}

export default tool