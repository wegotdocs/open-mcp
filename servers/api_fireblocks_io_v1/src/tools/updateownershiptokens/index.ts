import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateownershiptokens",
  "toolDescription": "Refresh vault account tokens",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/nfts/ownership/tokens",
  "method": "put",
  "security": [],
  "paramsMap": {
    "query": {
      "blockchainDescriptor": "blockchainDescriptor",
      "vaultAccountId": "vaultAccountId"
    },
    "header": {
      "Idempotency-Key": "Idempotency-Key"
    }
  },
  inputParamsSchema
}

export default tool