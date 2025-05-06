import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reactions_list_for_team_discussion_comment_in_org",
  "toolDescription": "List reactions for a team discussion comment",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}/reactions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug",
      "discussion_number": "discussion_number",
      "comment_number": "comment_number"
    },
    "query": {
      "content": "content",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool