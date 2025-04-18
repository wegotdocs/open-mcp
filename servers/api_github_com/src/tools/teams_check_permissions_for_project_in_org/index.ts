import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_check_permissions_for_project_in_org",
  "toolDescription": "Check team permissions for a project",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/projects/{project_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug",
      "project_id": "project_id"
    }
  },
  inputParamsSchema
}

export default tool