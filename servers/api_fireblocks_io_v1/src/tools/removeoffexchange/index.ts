import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "removeoffexchange",
  "toolDescription": "remove collateral",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/off_exchange/remove",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "transactionRequest": "transactionRequest",
      "isDstCollateral": "isDstCollateral"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool