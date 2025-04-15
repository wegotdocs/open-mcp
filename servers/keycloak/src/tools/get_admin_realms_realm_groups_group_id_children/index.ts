import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_groups_group_id_children",
  "toolDescription": "Return a paginated list of subgroups that have a parent group corresponding to the group on the URL",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/groups/{group-id}/children",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "briefRepresentation": "briefRepresentation",
      "exact": "exact",
      "first": "first",
      "max": "max",
      "search": "search"
    }
  },
  inputParamsSchema
}

export default tool