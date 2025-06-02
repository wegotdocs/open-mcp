import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getscreeningfulldetails",
  "toolDescription": "Provides all the compliance details for the given screened transaction.",
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