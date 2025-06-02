import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deleteexternalwallet",
  "toolDescription": "Delete an external wallet",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/external_wallets/{walletId}",
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