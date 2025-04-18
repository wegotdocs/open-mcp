import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gists_list",
  "toolDescription": "List gists for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/gists",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "since": "since",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool