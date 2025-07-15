import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "deletetask",
  "toolDescription": "Delete an allocation as a task",
  "baseUrl": "https://api.float.com/v3",
  "path": "/tasks/{task_id}",
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