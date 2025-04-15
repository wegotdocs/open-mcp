import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getohlcpricesevmbycontract",
  "toolDescription": "Token OHLCV prices by Contract Address",
  "baseUrl": "https://token-api.thegraph.com",
  "path": "/ohlc/prices/evm/{contract}",
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
    "path": {
      "contract": "contract"
    },
    "query": {
      "network_id": "network_id",
      "interval": "interval",
      "startTime": "startTime",
      "endTime": "endTime",
      "limit": "limit",
      "page": "page"
    }
  },
  inputParamsSchema
}

export default tool