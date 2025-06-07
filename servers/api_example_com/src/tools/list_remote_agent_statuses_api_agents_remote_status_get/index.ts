import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_remote_agent_statuses_api_agents_remote_status_get",
  "toolDescription": "List Remote Agent Statuses",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/remote-status",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "backend": "backend"
    }
  },
  inputParamsSchema
}

export default tool