import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getexchangeaccount",
  "toolDescription": "Find a specific exchange account",
  "baseUrl": "https://api.fireblocks.io/v1",
  "path": "/exchange_accounts/{exchangeAccountId}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "exchangeAccountId": "exchangeAccountId"
    }
  },
  inputParamsSchema
}

export default tool