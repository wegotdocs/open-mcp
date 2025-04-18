import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reactions_create_for_issue_comment",
  "toolDescription": "Create reaction for an issue comment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/issues/comments/{comment_id}/reactions",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "comment_id": "comment_id"
    },
    "body": {
      "content": "content"
    }
  },
  inputParamsSchema
}

export default tool