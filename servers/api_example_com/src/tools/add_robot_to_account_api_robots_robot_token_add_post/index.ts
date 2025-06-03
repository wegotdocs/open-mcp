import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "add_robot_to_account_api_robots_robot_token_add_post",
  "toolDescription": "Add Robot To Account",
  "baseUrl": "https://api.example.com",
  "path": "/api/robots/{robot_token}/add",
  "method": "post",
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
      "robot_token": "robot_token"
    }
  },
  inputParamsSchema
}

export default tool