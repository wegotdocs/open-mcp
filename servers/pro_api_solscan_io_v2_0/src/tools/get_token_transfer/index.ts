import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_token_transfer",
  "toolDescription": "Get token transfers",
  "baseUrl": "https://pro-api.solscan.io/v2.0",
  "path": "/token/transfer",
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
      "token": "token",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool