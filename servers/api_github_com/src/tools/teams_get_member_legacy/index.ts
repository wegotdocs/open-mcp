import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_get_member_legacy",
  "toolDescription": "Get team member (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/members/{username}",
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