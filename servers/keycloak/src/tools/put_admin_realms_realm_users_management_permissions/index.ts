import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_users_management_permissions",
  "toolDescription": "",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/users-management-permissions",
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