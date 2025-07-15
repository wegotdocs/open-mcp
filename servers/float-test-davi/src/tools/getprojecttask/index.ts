import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getprojecttask",
  "toolDescription": "Retrieve a single project task.",
  "baseUrl": "https://api.float.com/v3",
  "path": "/project-tasks/{project_task_id}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "project_task_id": "project_task_id"
    }
  },
  inputParamsSchema
}

export default tool