import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_prediction_api_v1_stock_predictions_ticker_date_get",
  "toolDescription": "Get Prediction",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/stock-predictions/{ticker}/{date}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "ticker": "ticker",
      "date": "date"
    },
    "query": {
      "start_bar": "start_bar",
      "end_bar": "end_bar"
    }
  },
  inputParamsSchema
}

export default tool