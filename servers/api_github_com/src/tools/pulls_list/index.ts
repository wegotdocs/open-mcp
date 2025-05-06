import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pulls_list",
  "toolDescription": "List pull requests",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "state": "state",
      "head": "head",
      "base": "base",
      "sort": "sort",
      "direction": "direction",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool