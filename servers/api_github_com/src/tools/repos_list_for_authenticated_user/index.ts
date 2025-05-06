import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_for_authenticated_user",
  "toolDescription": "List repositories for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/repos",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "visibility": "visibility",
      "affiliation": "affiliation",
      "type": "type",
      "sort": "sort",
      "direction": "direction",
      "per_page": "per_page",
      "page": "page",
      "since": "since",
      "before": "before"
    }
  },
  inputParamsSchema
}

export default tool