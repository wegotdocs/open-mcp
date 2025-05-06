import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pulls_list_comments_for_review",
  "toolDescription": "List comments for a pull request review",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/comments",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "pull_number": "pull_number",
      "review_id": "review_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool