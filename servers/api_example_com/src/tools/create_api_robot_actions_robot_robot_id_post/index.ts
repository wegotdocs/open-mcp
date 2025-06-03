import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_api_robot_actions_robot_robot_id_post",
  "toolDescription": "Create",
  "baseUrl": "https://api.example.com",
  "path": "/api/robot_actions/robot/{robot_id}",
  "method": "post",
  "security": [
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    },
    {
      "key": "Authorization",
      "value": "Bearer <mcp-env-var>API_KEY</mcp-env-var>",
      "in": "header",
      "envVarName": "API_KEY"
    }
  ],
  "paramsMap": {
    "path": {
      "robot_id": "robot_id"
    },
    "body": {
      "action": "action",
      "time": "time"
    }
  },
  inputParamsSchema
}

export default tool