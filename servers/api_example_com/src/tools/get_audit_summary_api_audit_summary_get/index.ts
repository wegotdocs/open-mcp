import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_audit_summary_api_audit_summary_get",
  "toolDescription": "Get Audit Summary",
  "baseUrl": "https://api.example.com",
  "path": "/api/audit/summary",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "start_date": "start_date",
      "end_date": "end_date"
    }
  },
  inputParamsSchema
}

export default tool