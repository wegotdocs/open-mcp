import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_user_stats_api_v1_predictions_user_stats_email_get",
  "toolDescription": "Get User Stats",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/predictions/user_stats/{email}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "email": "email"
    },
    "query": {
      "time_window": "time_window"
    }
  },
  inputParamsSchema
}

export default tool