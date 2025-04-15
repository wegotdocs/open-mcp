import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_users_user_id_disable_credential_types",
  "toolDescription": "Disable all credentials for a user of a specific type",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/disable-credential-types",
  "method": "put",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool