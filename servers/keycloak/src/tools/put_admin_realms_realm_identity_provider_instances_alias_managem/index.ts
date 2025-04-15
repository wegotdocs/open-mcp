import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "put_admin_realms_realm_identity_provider_instances_alias_managem",
  "toolDescription": "Return object stating whether client Authorization permissions have been initialized or not and a reference",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/identity-provider/instances/{alias}/management/permissions",
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