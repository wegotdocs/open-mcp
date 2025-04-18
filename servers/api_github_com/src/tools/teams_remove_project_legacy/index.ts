import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_remove_project_legacy",
  "toolDescription": "Remove a project from a team (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/projects/{project_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id",
      "project_id": "project_id"
    }
  },
  inputParamsSchema
}

export default tool