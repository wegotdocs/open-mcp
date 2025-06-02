import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "reissuetokenmultichain",
  "toolDescription": "Reissue a multichain token",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/multichain/reissue/token/{tokenLinkId}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "tokenLinkId": "tokenLinkId"
    },
    "body": {
      "vaultAccountId": "vaultAccountId",
      "chains": "chains",
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