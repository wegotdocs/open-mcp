import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "resendnotificationsbyresourceid",
  "toolDescription": "Resend notifications by resource Id",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/webhooks/{webhookId}/notifications/resend_by_resource",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "webhookId": "webhookId"
    },
    "body": {
      "resourceId": "resourceId",
      "excludeStatuses": "excludeStatuses"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool