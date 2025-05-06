import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_create_deployment_status",
  "toolDescription": "Create a deployment status",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "deployment_id": "deployment_id"
    },
    "body": {
      "state": "state",
      "target_url": "target_url",
      "log_url": "log_url",
      "description": "description",
      "environment": "environment",
      "environment_url": "environment_url",
      "auto_inactive": "auto_inactive"
    }
  },
  inputParamsSchema
}

export default tool