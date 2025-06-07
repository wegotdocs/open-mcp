import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "update_task_status_api_agents_agent_id_tasks_task_id_status_put",
  "toolDescription": "Update Task Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/{agent_id}/tasks/{task_id}/status",
  "method": "put",
  "security": [],
  "paramsMap": {
    "path": {
      "agent_id": "agent_id",
      "task_id": "task_id"
    },
    "body": {
      "status": "status",
      "result": "result",
      "error": "error"
    }
  },
  inputParamsSchema
}

export default tool