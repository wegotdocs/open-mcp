import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getexternalwallet",
  "toolDescription": "Find an external wallet",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/external_wallets/{walletId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "walletId": "walletId"
    }
  },
  inputParamsSchema
}

export default tool