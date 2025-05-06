import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pulls_create_reply_for_review_comment",
  "toolDescription": "Create a reply for a review comment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls/{pull_number}/comments/{comment_id}/replies",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "pull_number": "pull_number",
      "comment_id": "comment_id"
    },
    "body": {
      "body": "body"
    }
  },
  inputParamsSchema
}

export default tool