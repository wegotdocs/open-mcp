import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cancel_task_api_tasks_task_id_delete",
  "toolDescription": "Cancel Task",
  "baseUrl": "https://api.example.com",
  "path": "/api/tasks/{task_id}",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "path": {
      "task_id": "task_id"
    }
  },
  inputParamsSchema
}

export default tool