import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "rescantransactionsbeta",
  "toolDescription": "rescan array of transactions",
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