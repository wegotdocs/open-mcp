import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "api_insights_get_summary_stats",
  "toolDescription": "Get summary stats",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/insights/api/summary-stats",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "min_timestamp": "min_timestamp",
      "max_timestamp": "max_timestamp"
    }
  },
  inputParamsSchema
}

export default tool