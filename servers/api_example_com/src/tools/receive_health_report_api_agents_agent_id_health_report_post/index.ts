import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "receive_health_report_api_agents_agent_id_health_report_post",
  "toolDescription": "Receive Health Report",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/{agent_id}/health-report",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "agent_id": "agent_id"
    },
    "body": {
      "reports": "reports",
      "timestamp": "timestamp",
      "cluster": "cluster"
    }
  },
  inputParamsSchema
}

export default tool