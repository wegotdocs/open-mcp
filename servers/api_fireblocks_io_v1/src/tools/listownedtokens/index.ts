import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "listownedtokens",
  "toolDescription": "List all distinct owned tokens (paginated)",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/nfts/ownership/assets",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "ncwId": "ncwId",
      "walletType": "walletType",
      "pageCursor": "pageCursor",
      "pageSize": "pageSize",
      "sort": "sort",
      "order": "order",
      "status": "status",
      "search": "search",
      "spam": "spam"
    }
  },
  inputParamsSchema
}

export default tool