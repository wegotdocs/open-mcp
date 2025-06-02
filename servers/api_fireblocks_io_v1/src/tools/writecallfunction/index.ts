import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "writecallfunction",
  "toolDescription": "Call a write function on a deployed contract",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/contract_interactions/base_asset_id/{baseAssetId}/contract_address/{contractAddress}/functions/write",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "contractAddress": "contractAddress",
      "baseAssetId": "baseAssetId"
    },
    "body": {
      "vaultAccountId": "vaultAccountId",
      "abiFunction": "abiFunction",
      "amount": "amount",
      "feeLevel": "feeLevel",
      "fee": "fee",
      "note": "note",
      "useGasless": "useGasless",
      "externalId": "externalId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool