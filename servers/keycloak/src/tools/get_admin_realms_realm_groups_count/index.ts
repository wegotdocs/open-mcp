import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_admin_realms_realm_groups_count",
  "toolDescription": "Returns the groups counts.",
  "baseUrl": "https://api.example.com",
  "path": "/admin/realms/{realm}/groups/count",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "search": "search",
      "top": "top"
    }
  },
  inputParamsSchema
}

export default tool