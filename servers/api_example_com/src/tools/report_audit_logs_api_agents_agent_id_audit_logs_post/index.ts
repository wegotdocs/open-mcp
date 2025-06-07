import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "report_audit_logs_api_agents_agent_id_audit_logs_post",
  "toolDescription": "Report Audit Logs",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/{agent_id}/audit-logs",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "agent_id": "agent_id"
    },
    "body": {
      "agent_id": "b_agent_id",
      "cluster": "cluster",
      "timestamp": "timestamp",
      "entries": "entries",
      "start_time": "start_time",
      "end_time": "end_time"
    }
  },
  inputParamsSchema
}

export default tool