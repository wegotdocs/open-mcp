import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "updatetask",
  "toolDescription": "Update a task",
  "baseUrl": "https://api.taskmanager.com/v1",
  "path": "/tasks/{taskId}",
  "method": "put",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "taskId": "taskId"
    },
    "body": {
      "title": "title",
      "description": "description",
      "status": "status",
      "priority": "priority",
      "assigned_to": "assigned_to",
      "due_date": "due_date",
      "tags": "tags"
    }
  },
  inputParamsSchema
}

export default tool