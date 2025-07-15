import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getstatuses",
  "toolDescription": "List statuses",
  "baseUrl": "https://api.float.com/v3",
  "path": "/status",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "people_id": "people_id",
      "start_date": "start_date",
      "end_date": "end_date",
      "status_type_id": "status_type_id",
      "page": "page",
      "per-page": "per-page",
      "fields": "fields"
    }
  },
  inputParamsSchema
}

export default tool