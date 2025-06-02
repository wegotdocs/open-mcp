import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getmaxspendableamount",
  "toolDescription": "Get the max spendable amount in a transaction.",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/vault/accounts/{vaultAccountId}/{assetId}/max_spendable_amount",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "vaultAccountId": "vaultAccountId",
      "assetId": "assetId"
    },
    "query": {
      "manualSignging": "manualSignging"
    }
  },
  inputParamsSchema
}

export default tool