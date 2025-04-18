import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "search_topics",
  "toolDescription": "Search topics",
  "baseUrl": "https://api.github.com",
  "path": "/search/topics",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "q": "q",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool