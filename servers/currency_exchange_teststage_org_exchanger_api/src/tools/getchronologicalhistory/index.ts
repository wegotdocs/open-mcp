import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getchronologicalhistory",
  "toolDescription": "Retrieve chronological exchange rate history",
  "baseUrl": "http://currency-exchange.teststage.org/exchanger/api",
  "path": "/v1/exchange-rates/history",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "currency": "currency",
      "from": "from",
      "to": "to",
      "pageable": "pageable"
    }
  },
  inputParamsSchema
}

export default tool