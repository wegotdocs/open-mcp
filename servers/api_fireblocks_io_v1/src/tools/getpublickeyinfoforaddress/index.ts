import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpublickeyinfoforaddress",
  "toolDescription": "Get an asset's public key",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts/{vaultAccountId}/{assetId}/{change}/{addressIndex}/public_key_info",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "vaultAccountId": "vaultAccountId",
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