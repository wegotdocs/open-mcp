import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_leaderboard_api_v1_predictions_leaderboard_get",
  "toolDescription": "Get Leaderboard",
  "baseUrl": "https://api.example.com",
  "path": "/api/v1/predictions/leaderboard",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "time_window": "time_window"
    }
  },
  inputParamsSchema
}

export default tool