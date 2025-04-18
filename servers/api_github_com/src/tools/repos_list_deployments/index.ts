import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_deployments",
  "toolDescription": "List deployments",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/deployments",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "sha": "sha",
      "ref": "ref",
      "task": "task",
      "environment": "environment",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool