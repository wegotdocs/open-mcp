import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_remote_agent_status_api_agents_remote_status_environment_get",
  "toolDescription": "Get Remote Agent Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/remote-status/{environment}",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "environment": "environment"
    },
    "query": {
      "backend": "backend"
    }
  },
  inputParamsSchema
}

export default tool