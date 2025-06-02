import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getoffexchangecollateralaccounts",
  "toolDescription": "Find a specific collateral exchange account",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/off_exchange/collateral_accounts/{mainExchangeAccountId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "mainExchangeAccountId": "mainExchangeAccountId"
    }
  },
  inputParamsSchema
}

export default tool