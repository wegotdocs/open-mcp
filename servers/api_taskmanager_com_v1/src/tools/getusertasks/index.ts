import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "getusertasks",
  "toolDescription": "Get user's tasks",
  "baseUrl": "https://api.taskmanager.com/v1",
  "path": "/users/{userId}/tasks",
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
    "path": {
      "userId": "userId"
    }
  },
  inputParamsSchema
}

export default tool