import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_roles",
  "toolDescription": "Get all roles for the realm or client",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/roles",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "briefRepresentation": "briefRepresentation",
      "first": "first",
      "max": "max",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool