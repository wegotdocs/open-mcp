import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getohlcpoolsevmbypool",
  "toolDescription": "OHLCV by Pool",
  "baseUrl": "https://token-api.thegraph.com",
  "path": "/ohlc/pools/evm/{pool}",
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
      "pool": "pool"
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