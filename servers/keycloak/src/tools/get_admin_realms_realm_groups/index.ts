import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_groups",
  "toolDescription": "Get group hierarchy.  Only `name` and `id` are returned.  `subGroups` are only returned when using the `search` or `q` parameter. If none of these parameters is provided, the top-level groups are returned without `subGroups` being filled.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/groups",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "briefRepresentation": "briefRepresentation",
      "exact": "exact",
      "first": "first",
      "max": "max",
      "populateHierarchy": "populateHierarchy",
      "q": "q",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool