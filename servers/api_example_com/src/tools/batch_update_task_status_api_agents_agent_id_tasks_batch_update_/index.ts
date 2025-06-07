import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "batch_update_task_status_api_agents_agent_id_tasks_batch_update_",
  "toolDescription": "Batch Update Task Status",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/{agent_id}/tasks/batch-update",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "agent_id": "agent_id"
    }
  },
  inputParamsSchema
}

export default tool