import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_evaluate_scopes_proto",
  "toolDescription": "Return list of all protocol mappers, which will be used when generating tokens issued for particular client.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/protocol-mappers",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "scope": "scope"
    }
  },
  inputParamsSchema
}

export default tool