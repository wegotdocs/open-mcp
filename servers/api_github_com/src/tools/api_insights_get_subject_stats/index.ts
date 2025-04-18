import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "api_insights_get_subject_stats",
  "toolDescription": "Get subject stats",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/insights/api/subject-stats",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org"
    },
    "query": {
      "min_timestamp": "min_timestamp",
      "max_timestamp": "max_timestamp",
      "page": "page",
      "per_page": "per_page",
      "direction": "direction",
      "sort": "sort",
      "subject_name_substring": "subject_name_substring"
    }
  },
  inputParamsSchema
}

export default tool