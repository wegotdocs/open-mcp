import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_clients_client_uuid_scope_mappings_client",
  "toolDescription": "Get effective client roles Returns the roles for the client that are associated with the client's scope.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/scope-mappings/clients/{client}/composite",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "briefRepresentation": "briefRepresentation"
    }
  },
  inputParamsSchema
}

export default tool