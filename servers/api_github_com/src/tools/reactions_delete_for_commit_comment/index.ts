import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reactions_delete_for_commit_comment",
  "toolDescription": "Delete a commit comment reaction",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/comments/{comment_id}/reactions/{reaction_id}",
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