import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_list_repos_starred_by_authenticated_user",
  "toolDescription": "List repositories starred by the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/starred",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "sort": "sort",
      "direction": "direction",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool