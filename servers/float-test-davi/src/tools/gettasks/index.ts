import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettasks",
  "toolDescription": "List allocations as tasks",
  "baseUrl": "https://api.float.com/v3",
  "path": "/tasks",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "client_id": "client_id",
      "project_id": "project_id",
      "phase_id": "phase_id",
      "task_meta_id": "task_meta_id",
      "people_id": "people_id",
      "start_date": "start_date",
      "end_date": "end_date",
      "billable": "billable",
      "status": "status",
      "repeat_state": "repeat_state",
      "page": "page",
      "per-page": "per-page",
      "sort": "sort",
      "modified_since": "modified_since",
      "fields": "fields",
      "expand": "expand"
    }
  },
  inputParamsSchema
}

export default tool