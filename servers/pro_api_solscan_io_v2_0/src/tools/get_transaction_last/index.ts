import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_transaction_last",
  "toolDescription": "Get last transactions",
  "baseUrl": "https://pro-api.solscan.io/v2.0",
  "path": "/transaction/last",
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
      "limit": "limit"
    }
  },
  inputParamsSchema
}

export default tool