import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "claimrewards",
  "toolDescription": "Execute a Claim Rewards operation",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/staking/chains/{chainDescriptor}/claim_rewards",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "chainDescriptor": "chainDescriptor"
    },
    "body": {
      "id": "id",
      "fee": "fee",
      "feeLevel": "feeLevel",
      "txNote": "txNote"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool