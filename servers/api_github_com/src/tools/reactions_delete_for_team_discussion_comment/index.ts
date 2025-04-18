import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reactions_delete_for_team_discussion_comment",
  "toolDescription": "Delete team discussion comment reaction",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions/{reaction_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug",
      "discussion_number": "discussion_number",
      "comment_number": "comment_number",
      "reaction_id": "reaction_id"
    }
  },
  inputParamsSchema
}

export default tool