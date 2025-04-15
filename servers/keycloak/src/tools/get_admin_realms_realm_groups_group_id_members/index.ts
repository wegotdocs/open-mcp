import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_groups_group_id_members",
  "toolDescription": "Get users Returns a stream of users, filtered according to query parameters",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/groups/{group-id}/members",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "briefRepresentation": "briefRepresentation",
      "first": "first",
      "max": "max"
    }
  },
  inputParamsSchema
}

export default tool