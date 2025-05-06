import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "activity_mark_notifications_as_read",
  "toolDescription": "Mark notifications as read",
  "baseUrl": "https://api.github.com",
  "path": "/notifications",
  "method": "put",
  "security": [],
  "paramsMap": {
    "body": {
      "last_read_at": "last_read_at",
      "read": "read"
    }
  },
  inputParamsSchema
}

export default tool