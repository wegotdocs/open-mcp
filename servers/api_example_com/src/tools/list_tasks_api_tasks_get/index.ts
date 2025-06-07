import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "list_tasks_api_tasks_get",
  "toolDescription": "List Tasks",
  "baseUrl": "https://api.example.com",
  "path": "/api/tasks",
  "method": "get",
  "security": [],
  "paramsMap": {
    "query": {
      "status": "status",
      "task_type": "task_type",
      "environment": "environment",
      "assigned_agent_id": "assigned_agent_id"
    }
  },
  inputParamsSchema
}

export default tool