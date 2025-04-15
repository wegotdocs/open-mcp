import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_offline_sessions",
  "toolDescription": "Get offline sessions for client Returns a list of offline user sessions associated with this client",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/offline-sessions",
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