import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "readcallfunction",
  "toolDescription": "Call a read function",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/contract_interactions/base_asset_id/{baseAssetId}/contract_address/{contractAddress}/functions/read",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "contractAddress": "contractAddress",
      "baseAssetId": "baseAssetId"
    },
    "body": {
      "abiFunction": "abiFunction"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool