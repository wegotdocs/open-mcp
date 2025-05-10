import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search_commits",
  "toolDescription": "Search commits",
  "baseUrl": "https://api.github.com",
  "path": "/search/commits",
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