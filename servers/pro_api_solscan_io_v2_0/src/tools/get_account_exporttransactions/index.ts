import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_account_exporttransactions",
  "toolDescription": "Export transactions",
  "baseUrl": "https://pro-api.solscan.io/v2.0",
  "path": "/account/exportTransactions",
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
      "account": "account"
    }
  },
  inputParamsSchema
}

export default tool