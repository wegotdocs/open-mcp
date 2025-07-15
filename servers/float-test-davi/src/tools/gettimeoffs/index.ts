import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettimeoffs",
  "toolDescription": "List of time off scheduled.",
  "baseUrl": "https://api.float.com/v3",
  "path": "/timeoffs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "start_date": "start_date",
      "end_date": "end_date",
      "full_day": "full_day",
      "status": "status",
      "timeoff_type_id": "timeoff_type_id",
      "page": "page",
      "per-page": "per-page",
      "sort": "sort",
      "modified_since": "modified_since",
      "fields": "fields"
    }
  },
  inputParamsSchema
}

export default tool