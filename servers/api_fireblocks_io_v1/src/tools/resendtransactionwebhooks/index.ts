import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "resendtransactionwebhooks",
  "toolDescription": "Resend failed webhooks for a transaction by ID",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/webhooks/resend/{txId}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "txId": "txId"
    },
    "body": {
      "resendCreated": "resendCreated",
      "resendStatusUpdated": "resendStatusUpdated"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool