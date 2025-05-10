import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_model_summary_api_v1_predictions_summary_model_name_get",
  "toolDescription": "Get Model Summary",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/predictions/summary/{model_name}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "model_name": "model_name"
    }
  },
  inputParamsSchema
}

export default tool