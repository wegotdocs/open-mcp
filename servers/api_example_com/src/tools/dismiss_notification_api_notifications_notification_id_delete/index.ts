import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dismiss_notification_api_notifications_notification_id_delete",
  "toolDescription": "Dismiss Notification",
  "baseUrl": "https://api.example.com",
  "path": "/api/notifications/{notification_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "notification_id": "notification_id"
    }
  },
  inputParamsSchema
}

export default tool