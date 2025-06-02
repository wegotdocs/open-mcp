import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createwebhook",
  "toolDescription": "Create new webhook",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/webhooks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "url": "url",
      "description": "description",
      "events": "events",
      "enabled": "enabled"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool