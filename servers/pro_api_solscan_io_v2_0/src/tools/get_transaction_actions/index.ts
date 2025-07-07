import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_transaction_actions",
  "toolDescription": "Get transaction actions",
  "baseUrl": "https://pro-api.solscan.io/v2.0",
  "path": "/transaction/actions",
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
      "tx": "tx"
    }
  },
  inputParamsSchema
}

export default tool