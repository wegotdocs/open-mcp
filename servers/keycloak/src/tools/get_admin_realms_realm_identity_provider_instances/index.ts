import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_identity_provider_instances",
  "toolDescription": "List identity providers",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/identity-provider/instances",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "briefRepresentation": "briefRepresentation",
      "first": "first",
      "max": "max",
      "realmOnly": "realmOnly",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool