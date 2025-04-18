import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "api_insights_get_user_stats",
  "toolDescription": "Get user stats",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/insights/api/user-stats/{user_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "user_id": "user_id"
    },
    "query": {
      "min_timestamp": "min_timestamp",
      "max_timestamp": "max_timestamp",
      "page": "page",
      "per_page": "per_page",
      "direction": "direction",
      "sort": "sort",
      "actor_name_substring": "actor_name_substring"
    }
  },
  inputParamsSchema
}

export default tool