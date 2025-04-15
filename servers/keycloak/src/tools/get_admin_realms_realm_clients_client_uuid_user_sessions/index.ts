import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_user_sessions",
  "toolDescription": "Get user sessions for client Returns a list of user sessions associated with this client",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/user-sessions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "first": "first",
      "max": "max"
    }
  },
  inputParamsSchema
}

export default tool