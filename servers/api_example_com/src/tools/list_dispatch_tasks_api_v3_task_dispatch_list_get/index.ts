import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_dispatch_tasks_api_v3_task_dispatch_list_get",
  "toolDescription": "[user:dispatch(1)] List dispatch tasks",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/task/dispatch/list",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "org_id": "org_id",
      "start_date": "start_date",
      "end_date": "end_date",
      "time_offset": "time_offset",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool