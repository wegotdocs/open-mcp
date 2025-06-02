import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "createinternalwalletasset",
  "toolDescription": "Add an asset to an internal wallet",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/internal_wallets/{walletId}/{assetId}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "walletId": "walletId",
      "assetId": "assetId"
    },
    "body": {
      "address": "address",
      "tag": "tag"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool