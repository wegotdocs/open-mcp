import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_mark_thread_as_done",
  "toolDescription": "Mark a thread as done",
  "baseUrl": "https://api.github.com",
  "path": "/notifications/threads/{thread_id}",
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