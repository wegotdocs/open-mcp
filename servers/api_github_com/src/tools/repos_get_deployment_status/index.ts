import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_deployment_status",
  "toolDescription": "Get a deployment status",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "deployment_id": "deployment_id",
      "status_id": "status_id"
    }
  },
  inputParamsSchema
}

export default tool