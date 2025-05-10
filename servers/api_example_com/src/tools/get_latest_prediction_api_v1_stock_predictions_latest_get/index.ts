import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_latest_prediction_api_v1_stock_predictions_latest_get",
  "toolDescription": "Get Latest Prediction",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/stock-predictions/latest",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "ticker": "ticker",
      "date": "date"
    }
  },
  inputParamsSchema
}

export default tool