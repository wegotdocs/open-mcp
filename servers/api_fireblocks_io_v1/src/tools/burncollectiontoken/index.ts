import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "burncollectiontoken",
  "toolDescription": "Burn tokens",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/collections/{id}/tokens/burn",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "vaultAccountId": "vaultAccountId",
      "tokenId": "tokenId",
      "amount": "amount"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool