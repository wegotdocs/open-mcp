import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_agent_monitoring_report_api_agents_monitor_report_get",
  "toolDescription": "Get Agent Monitoring Report",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/monitor/report",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "format": "format"
    }
  },
  inputParamsSchema
}

export default tool