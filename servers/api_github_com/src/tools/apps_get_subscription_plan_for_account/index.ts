import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "apps_get_subscription_plan_for_account",
  "toolDescription": "Get a subscription plan for an account",
  "baseUrl": "https://api.github.com",
  "path": "/marketplace_listing/accounts/{account_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "account_id": "account_id"
    }
  },
  inputParamsSchema
}

export default tool