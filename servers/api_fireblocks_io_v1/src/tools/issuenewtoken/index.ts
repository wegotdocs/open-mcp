import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issuenewtoken",
  "toolDescription": "Issue a new token",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/tokens",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "blockchainId": "blockchainId",
      "assetId": "assetId",
      "vaultAccountId": "vaultAccountId",
      "createParams": "createParams",
      "displayName": "displayName",
      "useGasless": "useGasless",
      "fee": "fee",
      "feeLevel": "feeLevel"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool