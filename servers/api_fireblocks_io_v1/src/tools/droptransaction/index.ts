import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "droptransaction",
  "toolDescription": "Drop ETH transaction by ID",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/transactions/{txId}/drop",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "txId": "txId"
    },
    "body": {
      "txId": "b_txId",
      "feeLevel": "feeLevel",
      "gasPrice": "gasPrice"
    },
    "header": {
      "X-End-User-Wallet-Id": "X-End-User-Wallet-Id",
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool