import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "orgs_list_webhook_deliveries",
  "toolDescription": "List deliveries for an organization webhook",
  "baseUrl": "https://api.github.com",
  "path": "/orgs/{org}/hooks/{hook_id}/deliveries",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "org": "org",
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