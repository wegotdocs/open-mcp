import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search_labels",
  "toolDescription": "Search labels",
  "baseUrl": "https://api.github.com",
  "path": "/search/labels",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "repository_id": "repository_id",
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