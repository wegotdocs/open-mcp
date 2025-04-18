import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_deployment",
  "toolDescription": "Get a deployment",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/deployments/{deployment_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "deployment_id": "deployment_id"
    }
  },
  inputParamsSchema
}

export default tool