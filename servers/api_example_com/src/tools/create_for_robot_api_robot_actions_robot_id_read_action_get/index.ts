import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "create_for_robot_api_robot_actions_robot_id_read_action_get",
  "toolDescription": "Create For Robot",
  "baseUrl": "https://api.example.com",
  "path": "/api/robot_actions/{robot_id}/read_action",
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