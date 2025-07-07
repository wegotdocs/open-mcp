import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_token_markets",
  "toolDescription": "Get token markets",
  "baseUrl": "https://pro-api.solscan.io/v2.0",
  "path": "/token/markets",
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
      "token": "token"
    }
  },
  inputParamsSchema
}

export default tool