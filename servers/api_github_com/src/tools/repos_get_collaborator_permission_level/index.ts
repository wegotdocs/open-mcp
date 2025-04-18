import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_collaborator_permission_level",
  "toolDescription": "Get repository permissions for a user",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/collaborators/{username}/permission",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "username": "username"
    }
  },
  inputParamsSchema
}

export default tool