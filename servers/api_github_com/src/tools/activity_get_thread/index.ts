import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_get_thread",
  "toolDescription": "Get a thread",
  "baseUrl": "https://api.github.com",
  "path": "/notifications/threads/{thread_id}",
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