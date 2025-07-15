import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateprojecttask",
  "toolDescription": "Update a project tasks details",
  "baseUrl": "https://api.float.com/v3",
  "path": "/project-tasks/{project_task_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "project_task_id": "project_task_id"
    },
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