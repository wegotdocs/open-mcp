import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_list_notifications_for_authenticated_user",
  "toolDescription": "List notifications for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/notifications",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "all": "all",
      "participating": "participating",
      "since": "since",
      "before": "before",
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool