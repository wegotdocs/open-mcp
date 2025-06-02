import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "internaltransfer",
  "toolDescription": "Internal transfer for exchange accounts",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/exchange_accounts/{exchangeAccountId}/internal_transfer",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "exchangeAccountId": "exchangeAccountId"
    },
    "body": {
      "asset": "asset",
      "amount": "amount",
      "sourceType": "sourceType",
      "destType": "destType"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool