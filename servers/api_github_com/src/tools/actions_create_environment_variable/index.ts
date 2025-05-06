import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_create_environment_variable",
  "toolDescription": "Create an environment variable",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/environments/{environment_name}/variables",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "environment_name": "environment_name"
    },
    "body": {
      "name": "name",
      "value": "value"
    }
  },
  inputParamsSchema
}

export default tool