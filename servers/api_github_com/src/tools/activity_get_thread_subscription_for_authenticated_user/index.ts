import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_get_thread_subscription_for_authenticated_user",
  "toolDescription": "Get a thread subscription for the authenticated user",
  "baseUrl": "https://api.github.com",
  "path": "/notifications/threads/{thread_id}/subscription",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "thread_id": "thread_id"
    }
  },
  inputParamsSchema
}

export default tool