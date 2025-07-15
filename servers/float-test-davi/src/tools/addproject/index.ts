import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addproject",
  "toolDescription": "Add a new project",
  "baseUrl": "https://api.float.com/v3",
  "path": "/projects",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "project_id": "project_id",
      "name": "name",
      "project_code": "project_code",
      "client_id": "client_id",
      "color": "color",
      "notes": "notes",
      "tags": "tags",
      "budget_type": "budget_type",
      "budget_total": "budget_total",
      "budget_per_phase": "budget_per_phase",
      "budget_priority": "budget_priority",
      "default_hourly_rate": "default_hourly_rate",
      "non_billable": "non_billable",
      "status": "status",
      "tentative": "tentative",
      "locked_task_list": "locked_task_list",
      "active": "active",
      "project_manager": "project_manager",
      "all_pms_schedule": "all_pms_schedule",
      "created": "created",
      "modified": "modified",
      "start_date": "start_date",
      "end_date": "end_date"
    }
  },
  inputParamsSchema
}

export default tool