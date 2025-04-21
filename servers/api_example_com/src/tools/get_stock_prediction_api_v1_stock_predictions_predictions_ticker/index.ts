import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_stock_prediction_api_v1_stock_predictions_predictions_ticker",
  "toolDescription": "Get Stock Prediction",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/stock-predictions/predictions/{ticker}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "ticker": "ticker"
    },
    "query": {
      "date": "date"
    }
  },
  inputParamsSchema
}

export default tool