import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listblockchains",
  "toolDescription": "List blockchains",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/blockchains",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "protocol": "protocol",
      "deprecated": "deprecated",
      "test": "test",
      "ids": "ids",
      "pageCursor": "pageCursor",
      "pageSize": "pageSize"
    }
  },
  inputParamsSchema
}

export default tool