import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_get_membership_for_user_in_org",
  "toolDescription": "Get team membership for a user",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/memberships/{username}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool