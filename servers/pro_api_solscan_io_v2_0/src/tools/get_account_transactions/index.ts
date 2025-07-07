import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_account_transactions",
  "toolDescription": "Get account transactions",
  "baseUrl": "https://pro-api.solscan.io/v2.0",
  "path": "/account/transactions",
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
      "before": "before",
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool