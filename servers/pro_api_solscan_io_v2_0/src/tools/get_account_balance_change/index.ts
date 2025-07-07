import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_account_balance_change",
  "toolDescription": "Get balance changes",
  "baseUrl": "https://pro-api.solscan.io/v2.0",
  "path": "/account/balance_change",
  "method": "get",
  "security": [
    {
      "key": "token",
      "value": "<mcp-env-var>TOKEN</mcp-env-var>",
      "in": "header",
      "envVarName": "TOKEN"
    }
  ],
  "paramsMap": {
    "query": {
      "account": "account",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool