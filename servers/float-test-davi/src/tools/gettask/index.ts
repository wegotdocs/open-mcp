import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettask",
  "toolDescription": "Retrieve a single allocation as a task",
  "baseUrl": "https://api.float.com/v3",
  "path": "/tasks/{task_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "task_id": "task_id"
    }
  },
  inputParamsSchema
}

export default tool