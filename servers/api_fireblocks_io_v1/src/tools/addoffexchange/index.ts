import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addoffexchange",
  "toolDescription": "Add Collateral",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/off_exchange/add",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "transactionRequest": "transactionRequest",
      "isSrcCollateral": "isSrcCollateral"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool