import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "agent_heartbeat_api_agents_agent_id_heartbeat_post",
  "toolDescription": "Agent Heartbeat",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/{agent_id}/heartbeat",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "agent_id": "agent_id"
    },
    "body": {
      "status": "status",
      "current_tasks": "current_tasks",
      "metadata": "metadata",
      "health_snapshot": "health_snapshot"
    }
  },
  inputParamsSchema
}

export default tool