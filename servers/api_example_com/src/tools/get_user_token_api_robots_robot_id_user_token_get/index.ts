import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_user_token_api_robots_robot_id_user_token_get",
  "toolDescription": "Get User Token",
  "baseUrl": "https://api.example.com",
  "path": "/api/robots/{robot_id}/user-token",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "robot_id": "robot_id"
    }
  },
  inputParamsSchema
}

export default tool