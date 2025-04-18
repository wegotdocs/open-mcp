import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "api_insights_get_route_stats_by_actor",
  "toolDescription": "Get route stats by actor",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/insights/api/route-stats/{actor_type}/{actor_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "actor_type": "actor_type",
      "actor_id": "actor_id"
    },
    "query": {
      "min_timestamp": "min_timestamp",
      "max_timestamp": "max_timestamp",
      "page": "page",
      "per_page": "per_page",
      "direction": "direction",
      "sort": "sort",
      "api_route_substring": "api_route_substring"
    }
  },
  inputParamsSchema
}

export default tool