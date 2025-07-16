import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "gettasks",
  "toolDescription": "Get all tasks",
  "baseUrl": "https://api.taskmanager.com/v1",
  "path": "/tasks",
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
      "status": "status",
      "limit": "limit",
      "offset": "offset"
    }
  },
  inputParamsSchema
}

export default tool