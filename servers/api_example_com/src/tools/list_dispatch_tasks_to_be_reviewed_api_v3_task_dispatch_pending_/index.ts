import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_dispatch_tasks_to_be_reviewed_api_v3_task_dispatch_pending_",
  "toolDescription": "[user:dispatch=2] List dispatch tasks to be reviewed",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/task/dispatch/pending_review_list",
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