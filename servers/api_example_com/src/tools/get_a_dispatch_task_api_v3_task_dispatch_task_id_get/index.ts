import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_a_dispatch_task_api_v3_task_dispatch_task_id_get",
  "toolDescription": "[user:dispatch(1)] Get a dispatch task",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/task/dispatch/{task_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "task_id": "task_id"
    },
    "query": {
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool