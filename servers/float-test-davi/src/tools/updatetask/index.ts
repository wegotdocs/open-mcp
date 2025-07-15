import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetask",
  "toolDescription": "Update an allocations details as a task, read-only fields are ignored",
  "baseUrl": "https://api.float.com/v3",
  "path": "/tasks/{task_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "task_id": "task_id"
    }
  },
  inputParamsSchema
}

export default tool