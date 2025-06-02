import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getdeployedcontractabi",
  "toolDescription": "Return deployed contract's ABI",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/contract_interactions/base_asset_id/{baseAssetId}/contract_address/{contractAddress}/functions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "contractAddress": "contractAddress",
      "baseAssetId": "baseAssetId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool