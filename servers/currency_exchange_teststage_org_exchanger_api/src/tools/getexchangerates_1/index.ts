import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getexchangerates_1",
  "toolDescription": "Perform currency exchange",
  "baseUrl": "http://currency-exchange.teststage.org/exchanger/api",
  "path": "/v1/exchange-rates/exchange",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "currency": "currency",
      "sum": "sum",
      "provider": "provider",
      "pageable": "pageable"
    }
  },
  inputParamsSchema
}

export default tool