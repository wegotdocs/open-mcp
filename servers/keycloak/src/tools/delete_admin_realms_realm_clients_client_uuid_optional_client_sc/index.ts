import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_clients_client_uuid_optional_client_sc",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/optional-client-scopes/{clientScopeId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "clientScopeId": "clientScopeId"
    }
  },
  inputParamsSchema
}

export default tool