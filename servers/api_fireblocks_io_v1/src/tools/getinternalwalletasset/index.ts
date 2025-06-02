import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getinternalwalletasset",
  "toolDescription": "Get an asset from an internal wallet",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/internal_wallets/{walletId}/{assetId}",
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