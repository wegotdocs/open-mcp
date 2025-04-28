import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cancel_multiple_device_tasks_of_dispatch_api_v3_task_dispatch_de",
  "toolDescription": "[user:dispatch=2] Cancel multiple device tasks of dispatch",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/task/dispatch/devtask",
  "method": "delete",
  "security": [],
  "paramsMap": {
    "query": {
      "session_id": "session_id"
    },
    "body": {
      "devtask_id_list": "devtask_id_list",
      "note": "note"
    }
  },
  inputParamsSchema
}

export default tool