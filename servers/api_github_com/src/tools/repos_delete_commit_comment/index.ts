import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_delete_commit_comment",
  "toolDescription": "Delete a commit comment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/comments/{comment_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "comment_id": "comment_id"
    }
  },
  inputParamsSchema
}

export default tool