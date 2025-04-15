import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_users_user_id_groups_groupid_",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/groups/{groupId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "groupId": "groupId"
    }
  },
  inputParamsSchema
}

export default tool