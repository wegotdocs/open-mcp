import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_audit_logs_api_audit_logs_get",
  "toolDescription": "Get Audit Logs",
  "baseUrl": "https://api.example.com",
  "path": "/api/audit/logs",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "start_date": "start_date",
      "end_date": "end_date",
      "action": "action",
      "user": "user",
      "environment": "environment",
      "status": "status",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool