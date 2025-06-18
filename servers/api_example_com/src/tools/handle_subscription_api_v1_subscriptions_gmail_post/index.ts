import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "handle_subscription_api_v1_subscriptions_gmail_post",
  "toolDescription": "Handle Subscription",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/subscriptions/gmail",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "service": "service",
      "user_id": "user_id"
    }
  },
  inputParamsSchema
}

export default tool