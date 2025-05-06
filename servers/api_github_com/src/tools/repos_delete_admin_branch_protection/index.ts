import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_delete_admin_branch_protection",
  "toolDescription": "Delete admin branch protection",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "branch": "branch"
    }
  },
  inputParamsSchema
}

export default tool