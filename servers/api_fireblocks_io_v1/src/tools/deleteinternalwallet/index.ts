import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteinternalwallet",
  "toolDescription": "Delete an internal wallet",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/internal_wallets/{walletId}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "walletId": "walletId"
    }
  },
  inputParamsSchema
}

export default tool