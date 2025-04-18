import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_check_collaborator",
  "toolDescription": "Check if a user is a repository collaborator",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/collaborators/{username}",
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