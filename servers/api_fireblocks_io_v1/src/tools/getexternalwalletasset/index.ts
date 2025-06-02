import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getexternalwalletasset",
  "toolDescription": "Get an asset from an external wallet",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/external_wallets/{walletId}/{assetId}",
  "method": "get",
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