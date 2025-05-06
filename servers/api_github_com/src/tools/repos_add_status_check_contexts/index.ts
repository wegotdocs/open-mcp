import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_add_status_check_contexts",
  "toolDescription": "Add status check contexts",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts",
  "method": "post",
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