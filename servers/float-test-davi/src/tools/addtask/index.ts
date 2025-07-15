import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addtask",
  "toolDescription": "Add a new allocation as a task, read-only fields are ignored",
  "baseUrl": "https://api.float.com/v3",
  "path": "/tasks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "task_id": "task_id",
      "root_task_id": "root_task_id",
      "parent_task_id": "parent_task_id",
      "project_id": "project_id",
      "phase_id": "phase_id",
      "start_date": "start_date",
      "end_date": "end_date",
      "start_time": "start_time",
      "hours": "hours",
      "people_id": "people_id",
      "people_ids": "people_ids",
      "status": "status",
      "billable": "billable",
      "name": "name",
      "task_meta_id": "task_meta_id",
      "notes": "notes",
      "repeat_state": "repeat_state",
      "repeat_end_date": "repeat_end_date",
      "created_by": "created_by",
      "created": "created",
      "modified_by": "modified_by",
      "modified": "modified"
    }
  },
  inputParamsSchema
}

export default tool