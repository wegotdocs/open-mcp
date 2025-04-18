import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_delete_comment",
  "toolDescription": "Delete an issue comment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/issues/comments/{comment_id}",
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