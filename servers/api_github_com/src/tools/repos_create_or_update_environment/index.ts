import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_or_update_environment",
  "toolDescription": "Create or update an environment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/environments/{environment_name}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "environment_name": "environment_name"
    },
    "body": {
      "wait_timer": "wait_timer",
      "prevent_self_review": "prevent_self_review",
      "reviewers": "reviewers",
      "deployment_branch_policy": "deployment_branch_policy"
    }
  },
  inputParamsSchema
}

export default tool