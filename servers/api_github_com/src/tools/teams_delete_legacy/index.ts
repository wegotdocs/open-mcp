import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_delete_legacy",
  "toolDescription": "Delete a team (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id"
    }
  },
  inputParamsSchema
}

export default tool