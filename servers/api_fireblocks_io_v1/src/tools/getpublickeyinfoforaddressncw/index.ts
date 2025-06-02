import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpublickeyinfoforaddressncw",
  "toolDescription": "Get the public key of an asset",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/ncw/{walletId}/accounts/{accountId}/{assetId}/{change}/{addressIndex}/public_key_info",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "walletId": "walletId",
      "accountId": "accountId",
      "assetId": "assetId",
      "change": "change",
      "addressIndex": "addressIndex"
    },
    "query": {
      "compressed": "compressed"
    }
  },
  inputParamsSchema
}

export default tool