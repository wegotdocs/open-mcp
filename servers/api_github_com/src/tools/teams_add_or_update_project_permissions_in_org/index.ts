import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_add_or_update_project_permissions_in_org",
  "toolDescription": "Add or update team project permissions",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/projects/{project_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug",
      "project_id": "project_id"
    },
    "body": {
      "permission": "permission"
    }
  },
  inputParamsSchema
}

export default tool