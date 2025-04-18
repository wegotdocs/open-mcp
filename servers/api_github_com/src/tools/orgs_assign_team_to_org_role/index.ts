import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_assign_team_to_org_role",
  "toolDescription": "Assign an organization role to a team",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/organization-roles/teams/{team_slug}/{role_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug",
      "role_id": "role_id"
    }
  },
  inputParamsSchema
}

export default tool