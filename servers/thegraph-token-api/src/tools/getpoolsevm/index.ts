import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getpoolsevm",
  "toolDescription": "Liquidity Pools",
  "baseUrl": "https://token-api.thegraph.com",
  "path": "/pools/evm",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "network_id": "network_id",
      "pool": "pool",
      "factory": "factory",
      "token": "token",
      "symbol": "symbol",
      "protocol": "protocol"
    }
  },
  inputParamsSchema
}

export default tool