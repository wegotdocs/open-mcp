import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_tasks_get_tasks_",
  "toolDescription": "Task Filter",
  "baseUrl": "http://localhost:8000",
  "path": "/tasks/get_tasks/",
  "method": "get",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "query": {
      "sales_order_reference": "sales_order_reference",
      "task_assigned": "task_assigned"
    },
    "header": {
      "Content-Type": "Content-Type",
      "Accept": "Accept",
      "Authorization": "Authorization"
    }
  },
  inputParamsSchema
}

export default tool