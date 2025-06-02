import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettransactionreceipt",
  "toolDescription": "Get transaction receipt",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/contract_interactions/base_asset_id/{baseAssetId}/tx_hash/{txHash}/receipt",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "baseAssetId": "baseAssetId",
      "txHash": "txHash"
    }
  },
  inputParamsSchema
}

export default tool