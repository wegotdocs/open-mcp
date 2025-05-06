import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_update_deployment_branch_policy",
  "toolDescription": "Update a deployment branch policy",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies/{branch_policy_id}",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "environment_name": "environment_name",
      "branch_policy_id": "branch_policy_id"
    },
    "body": {
      "name": "name"
    }
  },
  inputParamsSchema
}

export default tool