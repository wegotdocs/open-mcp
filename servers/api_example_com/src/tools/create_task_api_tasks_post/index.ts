import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_task_api_tasks_post",
  "toolDescription": "Create Task",
  "baseUrl": "https://api.example.com",
  "path": "/api/tasks",
  "method": "post",
  "security": [],
  "paramsMap": {
    "body": {
      "task_type": "task_type",
      "environment": "environment",
      "parameters": "parameters",
      "assigned_agent_id": "assigned_agent_id"
    }
  },
  inputParamsSchema
}

export default tool