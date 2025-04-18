import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_remove_collaborator",
  "toolDescription": "Remove a repository collaborator",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/collaborators/{username}",
  "method": "delete",
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