import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_delete_thread_subscription",
  "toolDescription": "Delete a thread subscription",
  "baseUrl": "https://api.github.com",
  "path": "/notifications/threads/{thread_id}/subscription",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "thread_id": "thread_id"
    }
  },
  inputParamsSchema
}

export default tool