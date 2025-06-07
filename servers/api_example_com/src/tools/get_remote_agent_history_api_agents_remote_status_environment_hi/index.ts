import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_remote_agent_history_api_agents_remote_status_environment_hi",
  "toolDescription": "Get Remote Agent History",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/remote-status/{environment}/history",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "environment": "environment"
    },
    "query": {
      "backend": "backend",
      "hours": "hours"
    }
  },
  inputParamsSchema
}

export default tool