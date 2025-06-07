import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "claim_task_api_agents_agent_id_tasks_task_id_claim_post",
  "toolDescription": "Claim Task",
  "baseUrl": "https://api.example.com",
  "path": "/api/agents/{agent_id}/tasks/{task_id}/claim",
  "method": "post",
  "security": [],
  "paramsMap": {
    "path": {
      "agent_id": "agent_id",
      "task_id": "task_id"
    }
  },
  inputParamsSchema
}

export default tool