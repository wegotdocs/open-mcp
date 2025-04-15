import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_clients_client_uuid_management_permission",
  "toolDescription": "Return object stating whether client Authorization permissions have been initialized or not and a reference",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/management/permissions",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "enabled": "enabled",
      "resource": "resource",
      "scopePermissions": "scopePermissions"
    }
  },
  inputParamsSchema
}

export default tool