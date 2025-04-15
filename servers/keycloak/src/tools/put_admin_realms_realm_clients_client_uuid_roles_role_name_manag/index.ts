import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_clients_client_uuid_roles_role_name_manag",
  "toolDescription": "Return object stating whether role Authorization permissions have been initialized or not and a reference",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/management/permissions",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "role-name": "role-name"
    },
    "body": {
      "enabled": "enabled",
      "resource": "resource",
      "scopePermissions": "scopePermissions"
    }
  },
  inputParamsSchema
}

export default tool