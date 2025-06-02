import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getoffexchangesettlementtransactions",
  "toolDescription": "Get Settlements Transactions",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/off_exchange/settlements/transactions",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "mainExchangeAccountId": "mainExchangeAccountId"
    }
  },
  inputParamsSchema
}

export default tool