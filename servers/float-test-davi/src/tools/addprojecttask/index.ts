import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addprojecttask",
  "toolDescription": "Add a new project task",
  "baseUrl": "https://api.float.com/v3",
  "path": "/project-tasks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "task_meta_id": "task_meta_id",
      "project_id": "project_id",
      "phase_id": "phase_id",
      "task_name": "task_name",
      "billable": "billable",
      "budget": "budget",
      "count_tasks": "count_tasks",
      "count_logged_time": "count_logged_time",
      "created": "created",
      "modified": "modified"
    }
  },
  inputParamsSchema
}

export default tool