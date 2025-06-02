import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getexchangeaccountasset",
  "toolDescription": "Get an asset for an exchange account",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/exchange_accounts/{exchangeAccountId}/{assetId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "exchangeAccountId": "exchangeAccountId",
      "assetId": "assetId"
    }
  },
  inputParamsSchema
}

export default tool