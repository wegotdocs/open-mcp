import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_all_deployment_protection_rules",
  "toolDescription": "Get all deployment protection rules for an environment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "environment_name": "environment_name",
      "repo": "repo",
      "owner": "owner"
    }
  },
  inputParamsSchema
}

export default tool