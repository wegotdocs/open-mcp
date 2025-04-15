import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_users_profile_metadata",
  "toolDescription": "Get the UserProfileMetadata from the configuration",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/profile/metadata",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool