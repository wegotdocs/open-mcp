import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_github_actions_permissions_repository",
  "toolDescription": "Get GitHub Actions permissions for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/permissions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    }
  },
  inputParamsSchema
}

export default tool