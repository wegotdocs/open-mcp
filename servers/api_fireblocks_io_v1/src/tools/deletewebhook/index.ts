import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletewebhook",
  "toolDescription": "Delete a webhook",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/webhooks/{webhookId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "webhookId": "webhookId"
    }
  },
  inputParamsSchema
}

export default tool