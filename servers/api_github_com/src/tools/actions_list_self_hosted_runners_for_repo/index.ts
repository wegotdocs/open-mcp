import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "actions_list_self_hosted_runners_for_repo",
  "toolDescription": "List self-hosted runners for a repository",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/actions/runners",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo"
    },
    "query": {
      "name": "name",
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool