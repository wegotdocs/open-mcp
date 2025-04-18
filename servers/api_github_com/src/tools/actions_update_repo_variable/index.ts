import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_update_repo_variable",
  "toolDescription": "Update a repository variable",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/variables/{name}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "name": "name"
    },
    "body": {
      "name": "b_name",
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool