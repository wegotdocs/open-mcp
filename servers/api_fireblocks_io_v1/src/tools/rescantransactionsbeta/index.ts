import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "rescantransactionsbeta",
  "toolDescription": "Rescan an array of transactions",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/transactions/rescan",
  "method": "post",
  "security": [],
  "paramsMap": {
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool