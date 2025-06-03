import { inputParamsSchema } from "./schema/root.js"
import type { OpenMCPServerTool } from "@open-mcp/core"

const tool: OpenMCPServerTool = {
  "toolName": "get_last_for_robot_api_robot_routes_robot_id_route_get",
  "toolDescription": "Get Last For Robot",
  "baseUrl": "https://api.example.com",
  "path": "/api/robot_routes/{robot_id}/route",
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