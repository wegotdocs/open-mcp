import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updateloggedtime",
  "toolDescription": "Modify an existing logged time entry.",
  "baseUrl": "https://api.float.com/v3",
  "path": "/logged-time/{logged_time_id}",
  "method": "patch",
  "security": [],
  "paramsMap": {
    "path": {
      "logged_time_id": "logged_time_id"
    },
    "body": {
      "logged_time_id": "b_logged_time_id",
      "people_id": "people_id",
      "date": "date",
      "reference_date": "reference_date",
      "hours": "hours",
      "billable": "billable",
      "notes": "notes",
      "project_id": "project_id",
      "phase_id": "phase_id",
      "task_id": "task_id",
      "task_name": "task_name",
      "task_meta_id": "task_meta_id",
      "locked": "locked",
      "locked_date": "locked_date",
      "created": "created",
      "created_by": "created_by",
      "modified": "modified",
      "modified_by": "modified_by"
    }
  },
  inputParamsSchema
}

export default tool