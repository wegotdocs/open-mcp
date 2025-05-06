import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_get_legacy",
  "toolDescription": "Get a team (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id"
    }
  },
  inputParamsSchema
}

export default tool