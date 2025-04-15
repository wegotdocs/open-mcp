import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_clients_client_uuid_authz_resource_server",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/{scope-id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "scope-id": "scope-id"
    },
    "body": {
      "id": "id",
      "name": "name",
      "iconUri": "iconUri",
      "policies": "policies",
      "resources": "resources",
      "displayName": "displayName"
    }
  },
  inputParamsSchema
}

export default tool