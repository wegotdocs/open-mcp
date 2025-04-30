import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_tenant_notification",
  "toolDescription": "Notification request",
  "baseUrl": "https://api.example.com",
  "path": "/{tenant}/notification",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "tenant": "tenant"
    },
    "body": {
      "event": "event",
      "event_description": "event_description",
      "notification_id": "notification_id"
    }
  },
  inputParamsSchema
}

export default tool