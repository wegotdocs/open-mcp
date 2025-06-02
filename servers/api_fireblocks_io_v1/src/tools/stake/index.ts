import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "stake",
  "toolDescription": "Initiate Stake Operation",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/staking/chains/{chainDescriptor}/stake",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "chainDescriptor": "chainDescriptor"
    },
    "body": {
      "vaultAccountId": "vaultAccountId",
      "providerId": "providerId",
      "stakeAmount": "stakeAmount",
      "txNote": "txNote",
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