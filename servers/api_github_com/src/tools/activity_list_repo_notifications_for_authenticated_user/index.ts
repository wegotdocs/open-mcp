import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_list_repo_notifications_for_authenticated_user",
  "toolDescription": "List repository notifications for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/notifications",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "all": "all",
      "participating": "participating",
      "since": "since",
      "before": "before",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool