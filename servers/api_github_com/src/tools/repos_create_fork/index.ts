import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_fork",
  "toolDescription": "Create a fork",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/forks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "organization": "organization",
      "name": "name",
      "default_branch_only": "default_branch_only"
    }
  },
  inputParamsSchema
}

export default tool