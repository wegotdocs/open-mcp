import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_sensor_event_statistics_api_v3_stats_evt_post",
  "toolDescription": "[manager] Get sensor event statistics",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/stats/evt",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "start_date": "start_date",
      "end_date": "end_date",
      "evt_type_name_list": "evt_type_name_list",
      "org_id_list": "org_id_list"
    }
  },
  inputParamsSchema
}

export default tool