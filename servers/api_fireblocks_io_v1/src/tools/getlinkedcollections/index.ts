import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getlinkedcollections",
  "toolDescription": "Get collections",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/collections",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "pageCursor": "pageCursor",
      "pageSize": "pageSize",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool