import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "executepayoutaction",
  "toolDescription": "Execute a payout instruction set",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/payments/payout/{payoutId}/actions/execute",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "payoutId": "payoutId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool