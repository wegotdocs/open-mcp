import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getexchangerates",
  "toolDescription": "Retrieve current exchange rates",
  "baseUrl": "http://currency-exchange.teststage.org/exchanger/api",
  "path": "/v1/exchange-rates",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "pageable": "pageable"
    }
  },
  inputParamsSchema
}

export default tool