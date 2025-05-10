import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issues_update_comment",
  "toolDescription": "Update an issue comment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/issues/comments/{comment_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "comment_id": "comment_id"
    },
    "body": {
      "body": "body"
    }
  },
  inputParamsSchema
}

export default tool