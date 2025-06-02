import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getwebhook",
  "toolDescription": "Get webhook by id",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/webhooks/{webhookId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "webhookId": "webhookId"
    }
  },
  inputParamsSchema
}

export default tool