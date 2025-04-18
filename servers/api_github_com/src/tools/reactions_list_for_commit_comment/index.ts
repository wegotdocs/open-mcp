import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reactions_list_for_commit_comment",
  "toolDescription": "List reactions for a commit comment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/comments/{comment_id}/reactions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "comment_id": "comment_id"
    },
    "query": {
      "content": "content",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool