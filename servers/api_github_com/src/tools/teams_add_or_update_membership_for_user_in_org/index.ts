import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_add_or_update_membership_for_user_in_org",
  "toolDescription": "Add or update team membership for a user",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/memberships/{username}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug",
      "username": "username"
    },
    "body": {
      "role": "role"
    }
  },
  inputParamsSchema
}

export default tool