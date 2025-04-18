import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_list_subscriptions_for_authenticated_user_stubbed",
  "toolDescription": "List subscriptions for the authenticated user (stubbed)",
  "baseUrl": "https://api.github.com",
  "path": "/user/marketplace_purchases/stubbed",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "per_page": "per_page",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool