import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_get_repo_variable",
  "toolDescription": "Get a repository variable",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/variables/{name}",
  "method": "get",
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