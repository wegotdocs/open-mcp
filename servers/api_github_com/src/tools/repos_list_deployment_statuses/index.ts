import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_deployment_statuses",
  "toolDescription": "List deployment statuses",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/deployments/{deployment_id}/statuses",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "deployment_id": "deployment_id"
    },
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool