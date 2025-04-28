import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_click_event_statistics_api_v3_stats_click_post",
  "toolDescription": "[manager] Get click event statistics",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/stats/click",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "start_date": "start_date",
      "end_date": "end_date",
      "block_name_list": "block_name_list",
      "org_id_list": "org_id_list"
    }
  },
  inputParamsSchema
}

export default tool