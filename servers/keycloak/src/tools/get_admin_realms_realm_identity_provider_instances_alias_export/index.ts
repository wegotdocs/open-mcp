import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_identity_provider_instances_alias_export",
  "toolDescription": "Export public broker configuration for identity provider",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/identity-provider/instances/{alias}/export",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "format": "format"
    }
  },
  inputParamsSchema
}

export default tool