import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatewebhook",
  "toolDescription": "Update webhook",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/webhooks/{webhookId}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "webhookId": "webhookId"
    },
    "body": {
      "url": "url",
      "description": "description",
      "events": "events",
      "enabled": "enabled"
    }
  },
  inputParamsSchema
}

export default tool