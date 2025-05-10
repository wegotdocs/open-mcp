import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_update_environment_variable",
  "toolDescription": "Update an environment variable",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/environments/{environment_name}/variables/{name}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "name": "name",
      "environment_name": "environment_name"
    },
    "body": {
      "name": "b_name",
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool