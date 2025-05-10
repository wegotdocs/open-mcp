import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_program_statistics_api_v3_stats_prog_post",
  "toolDescription": "[manager] Get program statistics",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/stats/prog",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "start_date": "start_date",
      "end_date": "end_date",
      "prog_name": "prog_name",
      "org_id_list": "org_id_list"
    }
  },
  inputParamsSchema
}

export default tool