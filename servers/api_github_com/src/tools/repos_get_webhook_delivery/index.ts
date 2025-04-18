import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "repos_get_webhook_delivery",
  "toolDescription": "Get a delivery for a repository webhook",
  "baseUrl": "https://api.github.com",
  "path": "/repos/{owner}/{repo}/hooks/{hook_id}/deliveries/{delivery_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "owner": "owner",
      "repo": "repo",
      "hook_id": "hook_id",
      "delivery_id": "delivery_id"
    }
  },
  inputParamsSchema
}

export default tool