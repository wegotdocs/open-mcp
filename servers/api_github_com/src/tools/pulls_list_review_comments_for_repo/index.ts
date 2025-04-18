import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pulls_list_review_comments_for_repo",
  "toolDescription": "List review comments in a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls/comments",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
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