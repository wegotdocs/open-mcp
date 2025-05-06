import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pulls_create_review_comment",
  "toolDescription": "Create a review comment for a pull request",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls/{pull_number}/comments",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "pull_number": "pull_number"
    },
    "body": {
      "body": "body",
      "commit_id": "commit_id",
      "path": "path",
      "side": "side",
      "line": "line",
      "start_line": "start_line",
      "start_side": "start_side",
      "in_reply_to": "in_reply_to",
      "subject_type": "subject_type"
    }
  },
  inputParamsSchema
}

export default tool