import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpayout",
  "toolDescription": "Get the status of a payout instruction set",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/payments/payout/{payoutId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "payoutId": "payoutId"
    }
  },
  inputParamsSchema
}

export default tool