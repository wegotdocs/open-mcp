import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createpayout",
  "toolDescription": "Create a payout instruction set",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/payments/payout",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "paymentAccount": "paymentAccount",
      "instructionSet": "instructionSet"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool