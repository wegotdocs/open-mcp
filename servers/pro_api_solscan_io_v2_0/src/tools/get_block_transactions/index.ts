import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_block_transactions",
  "toolDescription": "Get block transactions",
  "baseUrl": "https://pro-api.solscan.io/v2.0",
  "path": "/block/transactions",
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
      "block": "block",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool