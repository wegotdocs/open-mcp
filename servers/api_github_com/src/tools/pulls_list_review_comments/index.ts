import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pulls_list_review_comments",
  "toolDescription": "List review comments on a pull request",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls/{pull_number}/comments",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "pull_number": "pull_number"
    },
    "query": {
      "sort": "sort",
      "direction": "direction",
      "since": "since",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool