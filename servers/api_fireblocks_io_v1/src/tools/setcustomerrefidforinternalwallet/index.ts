import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "setcustomerrefidforinternalwallet",
  "toolDescription": "Set an AML/KYT customer reference ID for internal wallet",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/internal_wallets/{walletId}/set_customer_ref_id",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "walletId": "walletId"
    },
    "body": {
      "customerRefId": "customerRefId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool