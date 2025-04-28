import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "review_a_dispatch_task_api_v3_task_dispatch_task_id_review_put",
  "toolDescription": "[administrator] Review a dispatch task",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/task/dispatch/{task_id}/review",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "task_id": "task_id"
    },
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "result": "result",
      "note": "note"
    }
  },
  inputParamsSchema
}

export default tool