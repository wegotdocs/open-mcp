import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gists_list_starred",
  "toolDescription": "List starred gists",
  "baseUrl": "https://api.github.com",
  "path": "/gists/starred",
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