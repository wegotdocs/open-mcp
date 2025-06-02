import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "settleoffexchangetrades",
  "toolDescription": "create settlement for a trader",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/off_exchange/settlements/trader",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "mainExchangeAccountId": "mainExchangeAccountId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool