import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "pulls_dismiss_review",
  "toolDescription": "Dismiss a review for a pull request",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls/{pull_number}/reviews/{review_id}/dismissals",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "pull_number": "pull_number",
      "review_id": "review_id"
    },
    "body": {
      "message": "message",
      "event": "event"
    }
  },
  inputParamsSchema
}

export default tool