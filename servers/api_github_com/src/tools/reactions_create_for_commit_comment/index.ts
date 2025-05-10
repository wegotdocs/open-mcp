import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reactions_create_for_commit_comment",
  "toolDescription": "Create reaction for a commit comment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/comments/{comment_id}/reactions",
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