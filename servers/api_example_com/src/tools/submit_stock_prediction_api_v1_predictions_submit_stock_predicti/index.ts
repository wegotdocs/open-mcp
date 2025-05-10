import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "submit_stock_prediction_api_v1_predictions_submit_stock_predicti",
  "toolDescription": "提交股票预测",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/predictions/submit_stock_prediction",
  "method": "post",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool