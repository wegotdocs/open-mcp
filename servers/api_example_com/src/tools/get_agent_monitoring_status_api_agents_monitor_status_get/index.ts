import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_agent_monitoring_status_api_agents_monitor_status_get",
  "toolDescription": "Get Agent Monitoring Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/monitor/status",
  "method": "get",
  "security": [],
  "paramsMap": {},
  inputParamsSchema
}

export default tool