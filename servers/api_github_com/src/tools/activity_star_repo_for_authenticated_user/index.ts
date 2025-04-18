import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_star_repo_for_authenticated_user",
  "toolDescription": "Star a repository for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/starred/{owner}/{repo}",
  "method": "put",
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