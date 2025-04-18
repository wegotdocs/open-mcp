import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_get_membership_for_user_legacy",
  "toolDescription": "Get team membership for a user (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/memberships/{username}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool