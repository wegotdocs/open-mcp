import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "mintcollectiontoken",
  "toolDescription": "Mint tokens",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/tokenization/collections/{id}/tokens/mint",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "id": "id"
    },
    "body": {
      "vaultAccountId": "vaultAccountId",
      "to": "to",
      "tokenId": "tokenId",
      "amount": "amount",
      "metadataURI": "metadataURI",
      "metadata": "metadata"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool