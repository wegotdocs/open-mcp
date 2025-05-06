import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "api_insights_get_time_stats",
  "toolDescription": "Get time stats",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/insights/api/time-stats",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
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