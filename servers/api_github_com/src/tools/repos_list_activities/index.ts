import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_activities",
  "toolDescription": "List repository activities",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/activity",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "direction": "direction",
      "per_page": "per_page",
      "before": "before",
      "after": "after",
      "ref": "ref",
      "actor": "actor",
      "time_period": "time_period",
      "activity_type": "activity_type"
    }
  },
  inputParamsSchema
}

export default tool