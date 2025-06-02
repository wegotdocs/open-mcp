import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "resendnotificationbyid",
  "toolDescription": "Resend notification by id",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/webhooks/{webhookId}/notifications/{notificationId}/resend",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "webhookId": "webhookId",
      "notificationId": "notificationId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool