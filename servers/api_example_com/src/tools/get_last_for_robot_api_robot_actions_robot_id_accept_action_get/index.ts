import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_last_for_robot_api_robot_actions_robot_id_accept_action_get",
  "toolDescription": "Get Last For Robot",
  "baseUrl": "https://api.example.com",
  "path": "/api/robot_actions/{robot_id}/accept_action",
  "method": "get",
  "security": [],
  "paramsMap": {
    "path": {
      "robot_id": "robot_id"
    },
    "body": {
      "status": "status"
    }
  },
  inputParamsSchema
}

export default tool