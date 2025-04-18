import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_check_repo_is_starred_by_authenticated_user",
  "toolDescription": "Check if a repository is starred by the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/starred/{owner}/{repo}",
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