import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "convertassets",
  "toolDescription": "Convert exchange account funds from the source asset to the destination asset.",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/exchange_accounts/{exchangeAccountId}/convert",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "exchangeAccountId": "exchangeAccountId"
    },
    "body": {
      "srcAsset": "srcAsset",
      "destAsset": "destAsset",
      "amount": "amount"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool