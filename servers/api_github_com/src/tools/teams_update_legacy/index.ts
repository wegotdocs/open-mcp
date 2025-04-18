import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_update_legacy",
  "toolDescription": "Update a team (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id"
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