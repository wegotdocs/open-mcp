import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "split",
  "toolDescription": "Execute a Split operation",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/staking/chains/{chainDescriptor}/split",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "chainDescriptor": "chainDescriptor"
    },
    "body": {
      "id": "id",
      "amount": "amount",
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