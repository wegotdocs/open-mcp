import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_update_discussion_comment_in_org",
  "toolDescription": "Update a discussion comment",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/discussions/{discussion_number}/comments/{comment_number}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug",
      "discussion_number": "discussion_number",
      "comment_number": "comment_number"
    },
    "body": {
      "body": "body"
    }
  },
  inputParamsSchema
}

export default tool