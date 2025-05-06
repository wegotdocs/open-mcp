import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_delete_repo_variable",
  "toolDescription": "Delete a repository variable",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/variables/{name}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool