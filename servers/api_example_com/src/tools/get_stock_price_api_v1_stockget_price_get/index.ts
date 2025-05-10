import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_stock_price_api_v1_stockget_price_get",
  "toolDescription": "Get Stock Price",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/stockget/price",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "symbol": "symbol"
    }
  },
  inputParamsSchema
}

export default tool