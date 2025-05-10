import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dispatch_a_schedule_to_multiple_players_api_v3_task_dispatch_skd",
  "toolDescription": "[user:dispatch=2] Dispatch a schedule to multiple players",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/task/dispatch/skd/{skd_id}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "skd_id": "skd_id"
    },
    "query": {
      "flush_current_skd": "flush_current_skd",
      "replace_previous_dispatch": "replace_previous_dispatch",
      "session_id": "session_id"
    },
    "body": {
      "task_in": "task_in",
      "dev_id_list": "dev_id_list"
    }
  },
  inputParamsSchema
}

export default tool