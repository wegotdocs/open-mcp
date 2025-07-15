import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "addphase",
  "toolDescription": "Add a new phase",
  "baseUrl": "https://api.float.com/v3",
  "path": "/phases",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "phase_id": "phase_id",
      "project_id": "project_id",
      "name": "name",
      "color": "color",
      "notes": "notes",
      "start_date": "start_date",
      "end_date": "end_date",
      "budget_total": "budget_total",
      "default_hourly_rate": "default_hourly_rate",
      "non_billable": "non_billable",
      "status": "status",
      "tentative": "tentative",
      "active": "active",
      "created": "created",
      "modified": "modified"
    }
  },
  inputParamsSchema
}

export default tool