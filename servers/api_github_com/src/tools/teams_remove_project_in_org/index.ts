import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_remove_project_in_org",
  "toolDescription": "Remove a project from a team",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/projects/{project_id}",
  "method": "delete",
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