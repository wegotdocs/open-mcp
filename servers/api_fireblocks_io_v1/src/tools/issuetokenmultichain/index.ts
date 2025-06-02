import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "issuetokenmultichain",
  "toolDescription": "Issue a token on one or more blockchains",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/multichain/tokens",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "vaultAccountId": "vaultAccountId",
      "createParams": "createParams",
      "salt": "salt",
      "chains": "chains",
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