import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_users_user_id_offline_sessions_clientuuid",
  "toolDescription": "Get offline sessions associated with the user and client",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users/{user-id}/offline-sessions/{clientUuid}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "clientUuid": "clientUuid"
    }
  },
  inputParamsSchema
}

export default tool