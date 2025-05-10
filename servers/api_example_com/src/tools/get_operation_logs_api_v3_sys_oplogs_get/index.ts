import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_operation_logs_api_v3_sys_oplogs_get",
  "toolDescription": "Get operation logs",
  "baseUrl": "https://api.example.com",
  "path": "/api/v3/sys/oplogs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "start_date": "start_date",
      "end_date": "end_date",
      "time_offset": "time_offset",
      "log_types": "log_types",
      "t_types": "t_types",
      "session_id": "session_id"
    }
  },
  inputParamsSchema
}

export default tool