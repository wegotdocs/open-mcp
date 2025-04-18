import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_list_webhook_deliveries",
  "toolDescription": "List deliveries for a repository webhook",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/hooks/{hook_id}/deliveries",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "hook_id": "hook_id"
    },
    "query": {
      "per_page": "per_page",
      "cursor": "cursor"
    }
  },
  inputParamsSchema
}

export default tool