import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "post_company_time_offs",
  "toolDescription": "This endpoint is responsible for adding absence data for the company employees.",
  "baseUrl": "https://api.personio.de/v1",
  "path": "/company/time-offs",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "comment": "comment",
      "employee_id": "employee_id",
      "end_date": "end_date",
      "half_day_end": "half_day_end",
      "half_day_start": "half_day_start",
      "start_date": "start_date",
      "time_off_type_id": "time_off_type_id"
    }
  },
  inputParamsSchema
}

export default tool