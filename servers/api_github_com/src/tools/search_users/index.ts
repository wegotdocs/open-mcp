import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search_users",
  "toolDescription": "Search users",
  "baseUrl": "https://api.github.com",
  "path": "/search/users",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "q": "q",
      "sort": "sort",
      "order": "order",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool