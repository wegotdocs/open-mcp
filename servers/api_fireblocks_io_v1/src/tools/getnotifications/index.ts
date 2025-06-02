import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnotifications",
  "toolDescription": "Get all notifications by webhook id",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/webhooks/{webhookId}/notifications",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "webhookId": "webhookId"
    },
    "query": {
      "order": "order",
      "pageCursor": "pageCursor",
      "pageSize": "pageSize",
      "createdStartDate": "createdStartDate",
      "createdEndDate": "createdEndDate",
      "statuses": "statuses",
      "eventTypes": "eventTypes",
      "resourceId": "resourceId"
    }
  },
  inputParamsSchema
}

export default tool