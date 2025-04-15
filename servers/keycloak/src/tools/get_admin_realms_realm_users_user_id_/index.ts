import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_users_user_id_",
  "toolDescription": "Get representation of the user",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "userProfileMetadata": "userProfileMetadata"
    }
  },
  inputParamsSchema
}

export default tool