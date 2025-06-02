import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listownedcollections",
  "toolDescription": "List owned collections (paginated)",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/nfts/ownership/collections",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "ncwId": "ncwId",
      "walletType": "walletType",
      "search": "search",
      "pageCursor": "pageCursor",
      "pageSize": "pageSize",
      "sort": "sort",
      "order": "order",
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool