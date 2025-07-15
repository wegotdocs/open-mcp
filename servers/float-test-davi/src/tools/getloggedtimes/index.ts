import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getloggedtimes",
  "toolDescription": "List logged time for a project or person.",
  "baseUrl": "https://api.float.com/v3",
  "path": "/logged-time",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "people_id": "people_id",
      "project_id": "project_id",
      "phase_id": "phase_id",
      "task_meta_id": "task_meta_id",
      "start_date": "start_date",
      "end_date": "end_date",
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