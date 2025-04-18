import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_check_permissions_for_project_legacy",
  "toolDescription": "Check team permissions for a project (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/projects/{project_id}",
  "method": "get",
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