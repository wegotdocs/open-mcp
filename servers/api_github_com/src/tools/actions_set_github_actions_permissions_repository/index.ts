import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_set_github_actions_permissions_repository",
  "toolDescription": "Set GitHub Actions permissions for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/permissions",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "enabled": "enabled",
      "allowed_actions": "allowed_actions"
    }
  },
  inputParamsSchema
}

export default tool