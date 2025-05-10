import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_unstar_repo_for_authenticated_user",
  "toolDescription": "Unstar a repository for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/user/starred/{owner}/{repo}",
  "method": "delete",
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