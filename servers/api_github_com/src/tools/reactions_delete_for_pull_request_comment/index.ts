import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reactions_delete_for_pull_request_comment",
  "toolDescription": "Delete a pull request comment reaction",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/pulls/comments/{comment_id}/reactions/{reaction_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "comment_id": "comment_id",
      "reaction_id": "reaction_id"
    }
  },
  inputParamsSchema
}

export default tool