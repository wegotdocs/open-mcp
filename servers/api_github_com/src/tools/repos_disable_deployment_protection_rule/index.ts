import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_disable_deployment_protection_rule",
  "toolDescription": "Disable a custom protection rule for an environment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{protection_rule_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "environment_name": "environment_name",
      "repo": "repo",
      "owner": "owner",
      "protection_rule_id": "protection_rule_id"
    }
  },
  inputParamsSchema
}

export default tool