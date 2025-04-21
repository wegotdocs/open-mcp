import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_all_predictions_api_v1_predictions_get_all_predictions_get",
  "toolDescription": "Get All Predictions",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/predictions/get_all_predictions",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool