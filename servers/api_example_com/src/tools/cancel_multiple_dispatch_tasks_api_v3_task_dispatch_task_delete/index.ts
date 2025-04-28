import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cancel_multiple_dispatch_tasks_api_v3_task_dispatch_task_delete",
  "toolDescription": "[user:dispatch=2] Cancel multiple dispatch tasks",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/task/dispatch/task",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "task_id_list": "task_id_list",
      "note": "note"
    }
  },
  inputParamsSchema
}

export default tool