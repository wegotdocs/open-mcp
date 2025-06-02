import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnotification",
  "toolDescription": "Get notification by id",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/webhooks/{webhookId}/notifications/{notificationId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "webhookId": "webhookId",
      "notificationId": "notificationId"
    },
    "query": {
      "includeData": "includeData"
    }
  },
  inputParamsSchema
}

export default tool