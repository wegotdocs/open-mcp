import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_available_symbols_api_v1_stock_predictions_symbols_get",
  "toolDescription": "Get Available Symbols",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/stock-predictions/symbols",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool