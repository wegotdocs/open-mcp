import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gethighestexchangerate",
  "toolDescription": "Retrieve highest exchange rate",
  "baseUrl": "http://currency-exchange.teststage.org/exchanger/api",
  "path": "/v1/exchange-rates/top-rate",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "currency": "currency"
    }
  },
  inputParamsSchema
}

export default tool