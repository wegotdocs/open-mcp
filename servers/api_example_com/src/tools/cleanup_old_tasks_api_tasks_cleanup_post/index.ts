import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "cleanup_old_tasks_api_tasks_cleanup_post",
  "toolDescription": "Cleanup Old Tasks",
  "baseUrl": "https://api.example.com",
  "path": "/api/tasks/cleanup",
  "method": "post",
  "security": [],
  "paramsMap": {
    "query": {
      "older_than_hours": "older_than_hours"
    }
  },
  inputParamsSchema
}

export default tool