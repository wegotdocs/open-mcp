import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_update_in_org",
  "toolDescription": "Update a team",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug"
    },
    "body": {
      "name": "name",
      "description": "description",
      "privacy": "privacy",
      "notification_setting": "notification_setting",
      "permission": "permission",
      "parent_team_id": "parent_team_id"
    }
  },
  inputParamsSchema
}

export default tool