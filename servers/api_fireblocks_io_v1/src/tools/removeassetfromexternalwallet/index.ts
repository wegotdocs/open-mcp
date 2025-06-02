import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "removeassetfromexternalwallet",
  "toolDescription": "Delete an asset from an external wallet",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/external_wallets/{walletId}/{assetId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "walletId": "walletId",
      "assetId": "assetId"
    }
  },
  inputParamsSchema
}

export default tool