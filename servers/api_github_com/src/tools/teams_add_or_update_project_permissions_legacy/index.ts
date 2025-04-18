import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_add_or_update_project_permissions_legacy",
  "toolDescription": "Add or update team project permissions (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/projects/{project_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id",
      "project_id": "project_id"
    },
    "body": {
      "permission": "permission"
    }
  },
  inputParamsSchema
}

export default tool