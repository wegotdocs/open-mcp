import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_custom_deployment_rule_integrations",
  "toolDescription": "List custom deployment rule integrations available for an environment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/apps",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "environment_name": "environment_name",
      "repo": "repo",
      "owner": "owner"
    },
    "query": {
      "page": "page",
      "per_page": "per_page"
    }
  },
  inputParamsSchema
}

export default tool