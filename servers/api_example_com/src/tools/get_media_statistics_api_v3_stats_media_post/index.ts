import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_media_statistics_api_v3_stats_media_post",
  "toolDescription": "[manager] Get media statistics",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/stats/media",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "start_date": "start_date",
      "end_date": "end_date",
      "media_name": "media_name",
      "org_id_list": "org_id_list"
    }
  },
  inputParamsSchema
}

export default tool