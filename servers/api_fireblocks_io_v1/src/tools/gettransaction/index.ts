import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettransaction",
  "toolDescription": "Find a specific transaction by Fireblocks transaction ID",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/transactions/{txId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "txId": "txId"
    }
  },
  inputParamsSchema
}

export default tool