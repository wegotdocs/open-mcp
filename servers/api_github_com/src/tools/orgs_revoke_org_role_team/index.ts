import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_revoke_org_role_team",
  "toolDescription": "Remove an organization role from a team",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/organization-roles/teams/{team_slug}/{role_id}",
  "method": "delete",
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