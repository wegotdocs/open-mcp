import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_check_permissions_for_repo_in_org",
  "toolDescription": "Check team permissions for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
      "team_slug": "team_slug",
      "owner": "owner",
      "repo": "repo"
    }
  },
  inputParamsSchema
}

export default tool