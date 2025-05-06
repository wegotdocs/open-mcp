import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_remove_repo_legacy",
  "toolDescription": "Remove a repository from a team (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/repos/{owner}/{repo}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id",
      "owner": "owner",
      "repo": "repo"
    }
  },
  inputParamsSchema
}

export default tool