import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "delete_admin_realms_realm_clients_client_uuid_authz_resource_ser",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/{scope-id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "scope-id": "scope-id"
    }
  },
  inputParamsSchema
}

export default tool