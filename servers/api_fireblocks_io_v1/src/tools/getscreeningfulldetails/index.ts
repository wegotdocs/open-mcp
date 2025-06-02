import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getscreeningfulldetails",
  "toolDescription": "Get Screening Full Details",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/screening/transaction/{txId}",
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