import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "resendwebhooks",
  "toolDescription": "Resend failed webhooks",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/webhooks/resend",
  "method": "post",
  "security": [],
  "paramsMap": {
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool