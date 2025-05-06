import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_list_for_authenticated_user",
  "toolDescription": "List user account issues assigned to the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/issues",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "filter": "filter",
      "state": "state",
      "labels": "labels",
      "sort": "sort",
      "direction": "direction",
      "since": "since",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool