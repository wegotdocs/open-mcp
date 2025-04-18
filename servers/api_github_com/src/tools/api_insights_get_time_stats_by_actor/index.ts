import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "api_insights_get_time_stats_by_actor",
  "toolDescription": "Get time stats by actor",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/insights/api/time-stats/{actor_type}/{actor_id}",
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
      "timestamp_increment": "timestamp_increment"
    }
  },
  inputParamsSchema
}

export default tool