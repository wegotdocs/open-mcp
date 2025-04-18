import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_list_accounts_for_plan",
  "toolDescription": "List accounts for a plan",
  "baseUrl": "https://api.github.com",
  "path": "/marketplace_listing/plans/{plan_id}/accounts",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "plan_id": "plan_id"
    },
    "query": {
      "sort": "sort",
      "direction": "direction",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool