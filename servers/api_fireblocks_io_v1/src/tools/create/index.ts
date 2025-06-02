import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create",
  "toolDescription": "Create a new Web3 connection.",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/connections/wc",
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