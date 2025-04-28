import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "dispatch_a_program_to_multiple_players_api_v3_task_dispatch_prog",
  "toolDescription": "[user:dispatch=2] Dispatch a program to multiple players",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/task/dispatch/prog/{prog_id}",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "prog_id": "prog_id"
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