import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_remove_repo_in_org",
  "toolDescription": "Remove a repository from a team",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/teams/{team_slug}/repos/{owner}/{repo}",
  "method": "delete",
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