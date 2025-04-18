import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_branches",
  "toolDescription": "List branches",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/branches",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "protected": "protected",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool