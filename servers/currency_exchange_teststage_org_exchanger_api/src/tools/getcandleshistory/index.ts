import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getcandleshistory",
  "toolDescription": "Retrieve historical candle data",
  "baseUrl": "http://currency-exchange.teststage.org/exchanger/api",
  "path": "/v1/ohlcv/history",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "symbols": "symbols",
      "providers": "providers",
      "from": "from",
      "to": "to",
      "limit": "limit",
      "interval": "interval",
      "cursor": "cursor"
    }
  },
  inputParamsSchema
}

export default tool