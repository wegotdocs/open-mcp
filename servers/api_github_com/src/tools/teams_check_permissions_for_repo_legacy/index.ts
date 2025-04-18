import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_check_permissions_for_repo_legacy",
  "toolDescription": "Check team permissions for a repository (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/repos/{owner}/{repo}",
  "method": "get",
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