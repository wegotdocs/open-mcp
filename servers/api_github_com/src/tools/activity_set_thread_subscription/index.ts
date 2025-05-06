import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_set_thread_subscription",
  "toolDescription": "Set a thread subscription",
  "baseUrl": "https://api.github.com",
  "path": "/notifications/threads/{thread_id}/subscription",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "thread_id": "thread_id"
    },
    "body": {
      "ignored": "ignored"
    }
  },
  inputParamsSchema
}

export default tool