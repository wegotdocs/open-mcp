import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getownershiptokens",
  "toolDescription": "List all owned tokens (paginated)",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/nfts/ownership/tokens",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "blockchainDescriptor": "blockchainDescriptor",
      "vaultAccountIds": "vaultAccountIds",
      "ncwId": "ncwId",
      "ncwAccountIds": "ncwAccountIds",
      "walletType": "walletType",
      "ids": "ids",
      "collectionIds": "collectionIds",
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