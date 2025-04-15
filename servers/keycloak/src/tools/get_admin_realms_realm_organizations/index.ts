import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_organizations",
  "toolDescription": "Returns a paginated list of organizations filtered according to the specified parameters",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/organizations",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "briefRepresentation": "briefRepresentation",
      "exact": "exact",
      "first": "first",
      "max": "max",
      "q": "q",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool