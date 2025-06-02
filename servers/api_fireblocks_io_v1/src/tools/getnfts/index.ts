import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getnfts",
  "toolDescription": "List tokens by IDs",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/nfts/tokens",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "ids": "ids",
      "pageCursor": "pageCursor",
      "pageSize": "pageSize",
      "sort": "sort",
      "order": "order"
    }
  },
  inputParamsSchema
}

export default tool