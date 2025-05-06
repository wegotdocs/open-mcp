import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_deployment_protection_rule",
  "toolDescription": "Create a custom deployment protection rule on an environment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "environment_name": "environment_name",
      "repo": "repo",
      "owner": "owner"
    },
    "body": {
      "integration_id": "integration_id"
    }
  },
  inputParamsSchema
}

export default tool