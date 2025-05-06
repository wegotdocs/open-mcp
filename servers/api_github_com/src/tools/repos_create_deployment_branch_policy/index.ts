import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_deployment_branch_policy",
  "toolDescription": "Create a deployment branch policy",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-policies",
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
      "type": "type"
    }
  },
  inputParamsSchema
}

export default tool