import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_create_repo_variable",
  "toolDescription": "Create a repository variable",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/variables",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "body": {
      "name": "name",
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool