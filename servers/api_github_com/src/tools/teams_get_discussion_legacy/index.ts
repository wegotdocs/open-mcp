import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_get_discussion_legacy",
  "toolDescription": "Get a discussion (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/discussions/{discussion_number}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id",
      "discussion_number": "discussion_number"
    }
  },
  inputParamsSchema
}

export default tool