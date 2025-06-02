import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "freezetransaction",
  "toolDescription": "Freeze a transaction",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/transactions/{txId}/freeze",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "txId": "txId"
    },
    "header": {
      "X-End-User-Wallet-Id": "X-End-User-Wallet-Id",
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool