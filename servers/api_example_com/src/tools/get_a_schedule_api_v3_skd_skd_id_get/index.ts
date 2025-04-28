import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_a_schedule_api_v3_skd_skd_id_get",
  "toolDescription": "[user:content=1] Get a schedule",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/skd/{skd_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "skd_id": "skd_id"
    },
    "query": {
      "show_layout": "show_layout",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool