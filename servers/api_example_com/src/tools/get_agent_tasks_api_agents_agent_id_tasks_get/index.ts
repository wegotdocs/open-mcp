import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_agent_tasks_api_agents_agent_id_tasks_get",
  "toolDescription": "Get Agent Tasks",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/{agent_id}/tasks",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "agent_id": "agent_id"
    },
    "query": {
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool