import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "teams_add_or_update_repo_permissions_legacy",
  "toolDescription": "Add or update team repository permissions (Legacy)",
  "baseUrl": "https://api.github.com",
  "path": "/teams/{team_id}/repos/{owner}/{repo}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "team_id": "team_id",
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