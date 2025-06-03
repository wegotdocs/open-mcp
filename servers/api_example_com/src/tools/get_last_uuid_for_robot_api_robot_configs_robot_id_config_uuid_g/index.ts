import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_last_uuid_for_robot_api_robot_configs_robot_id_config_uuid_g",
  "toolDescription": "Get Last Uuid For Robot",
  "baseUrl": "https://api.example.com",
  "path": "/api/robot_configs/{robot_id}/config/uuid",
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