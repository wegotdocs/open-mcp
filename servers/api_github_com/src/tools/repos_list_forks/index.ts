import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_forks",
  "toolDescription": "List forks",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/forks",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "sort": "sort",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool