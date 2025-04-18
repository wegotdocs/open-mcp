import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_revoke_all_org_roles_team",
  "toolDescription": "Remove all organization roles for a team",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/organization-roles/teams/{team_slug}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug"
    }
  },
  inputParamsSchema
}

export default tool