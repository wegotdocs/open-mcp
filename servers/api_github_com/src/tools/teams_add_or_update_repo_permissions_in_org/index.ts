import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_add_or_update_repo_permissions_in_org",
  "toolDescription": "Add or update team repository permissions",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug",
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "permission": "permission"
    }
  },
  inputParamsSchema
}

export default tool